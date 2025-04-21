from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import os
import chromadb
from tqdm import tqdm
from llama_index.core import (
    VectorStoreIndex,
    SimpleDirectoryReader,
    Settings,
    StorageContext,
)
from llama_index.core.node_parser import SentenceSplitter
from llama_index.vector_stores.chroma import ChromaVectorStore
from llama_index.embeddings.ollama import OllamaEmbedding
from llama_index.llms.ollama import Ollama
from llama_index.core import PromptTemplate

# ---------------------------
# Setup FastAPI App
# ---------------------------
app = FastAPI()

# ---------------------------
# Setup embedding and language models
# ---------------------------
emb_fn = "nomic-embed-text"
Settings.embed_model = OllamaEmbedding(model_name=emb_fn)
Settings.llm = Ollama(model="gemma3", request_timeout=120.0)

# ---------------------------
# Initialize Persistent Chroma Client
# ---------------------------
db = chromadb.PersistentClient(path="./chroma_db/rocm_db")
chroma_collection = db.get_or_create_collection("rocm_db")
vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
storage_context = StorageContext.from_defaults(vector_store=vector_store)

# ---------------------------
# Load and process documents
# ---------------------------
if chroma_collection.count() == 0:
    print("Vector Store empty, building vectors")
    print("---")
    documents = SimpleDirectoryReader(input_dir="./text/").load_data()

    # Initialize SentenceSplitter
    text_splitter = SentenceSplitter(chunk_size=512, chunk_overlap=20)
    nodes = []
    with tqdm(total=len(documents), desc="Creating nodes", unit="document") as pbar:
        for document in documents:
            current_nodes = text_splitter.get_nodes_from_documents([document])
            # Add source information to each node's metadata
            for node in current_nodes:
                node.metadata["source"] = "Lenin"
            nodes.extend(current_nodes)
            pbar.update(1)

    # Build the vector index (this embeds the nodes)
    vector_index = VectorStoreIndex(
        nodes, storage_context=storage_context, show_progress=True
    )
else:
    print("Vector Store not empty, using existing vectors")
    print("---")
    vector_index = VectorStoreIndex.from_vector_store(
        vector_store, storage_context=storage_context
    )

# ---------------------------
# Setup Query Engine
# ---------------------------
query_engine = vector_index.as_query_engine(streaming=True)

template = (
    "I'm Daniel Myers. Here's my resume:\n"
    "---------------------\n"
    "{context_str}\n"
    "---------------------\n"
    "Ask me anything about my resume or professional life.\n"
    "I'll answer based on what's above.\n"
    "I'll ensure that my answers are consise and to the point.\n"
    "I won't include the text straight from the resume. \n"
    "If I don't know, I'll say so.\n"
    "Prompt: {query_str}\n"
    "Answer: "
)

qa_template = PromptTemplate(template)
query_engine.update_prompts({"response_synthesizer:text_qa_template": qa_template})

# ---------------------------
# Define Request Model
# ---------------------------
class QueryRequest(BaseModel):
    question: str

# ---------------------------
# API Endpoint
# ---------------------------

@app.post("/query")
async def query(request: QueryRequest):
    try:
        # Query the engine
        response_stream = query_engine.query(request.question)

        # Define a generator to stream the response
        async def response_generator():
            for response_chunk in response_stream.response_gen:
                yield response_chunk  # Yield each chunk directly

        return StreamingResponse(response_generator(), media_type="text/plain")

    except Exception as e:
        return {"error": str(e)}

