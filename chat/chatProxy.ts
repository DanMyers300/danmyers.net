import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/query", async (req, res) => {
  const response = await fetch("http://192.168.1.16:8000/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  res.set(
    "Content-Type",
    response.headers.get("content-type") || "application/json"
  );

  // Buffer the response and send it
  const data = await response.arrayBuffer();
  res.send(Buffer.from(data));
});

app.listen(3001, "0.0.0.0", () =>
  console.log("Proxy running on http://0.0.0.0:3001")
);

