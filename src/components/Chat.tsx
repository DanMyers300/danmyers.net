import { useState, useEffect, useRef } from "react";
import { streamChat } from "../utils/chat";
import { IoMdChatboxes } from "react-icons/io";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setOpen((prev) => !prev);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
  
    // Add user and assistant message placeholders
    setMessages((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "" },
    ]);
    setInput("");
    setLoading(true);
  
    let acc = "";
    await streamChat(input, (token) => {
      acc += token;
      setMessages((prev) => {
        // Update the last assistant message
        const updated = [...prev];
        for (let i = updated.length - 1; i >= 0; i--) {
          if (updated[i].role === "assistant") {
            updated[i] = { ...updated[i], content: acc };
            break;
          }
        }
        return updated;
      });
    });
  
    setLoading(false);
  };

  return (
    <div className="absolute bottom-10 right-10 z-50">
      {/* Chat Icon */}
      <div
        className="
          rounded-full bg-white
          h-13 w-13 flex items-center justify-center
          transition-transform duration-200
          hover:scale-110
          cursor-pointer
          shadow-lg
        "
        onClick={toggleChat}
      >
        <IoMdChatboxes size={32} className="text-black" />
      </div>

      {/* Chat Modal */}
      {open && (
        <div
          className="
            fixed bottom-24 right-10
            min-w-70 max-w-2/3 min-h-120 max-h-2/3
            bg-black rounded-lg shadow-2xl
            flex flex-col
            transition-all duration-300
            animate-fade-in
          "
        >
          {/* Modal Header */}
          <div className="flex items-center justify-center p-4 border-b">
            Chat
          </div>
          {/* Modal Body */}
          <div
            ref={chatBodyRef}
            className="flex-1 p-4 overflow-y-auto space-y-2"
          >
            <div className="text-gray-300">Hello! Ask me anything!</div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs break-words"
                      : "bg-gray-700 text-white rounded-lg px-4 py-2 max-w-xs break-words"
                  }
                >
                  {msg.content}
                  {loading && idx === messages.length - 1 && msg.role === "assistant" && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Modal Footer */}
          <form
            className="p-4 border-t border-gray-700"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="w-full border border-gray-700 bg-gray-900 text-white rounded px-3 py-2 placeholder-gray-400"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              disabled={loading}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;

