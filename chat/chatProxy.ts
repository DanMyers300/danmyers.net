import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }));

app.options("/query", (req, res) => {
  res.set("Access-Control-Allow-Origin", "https://danmyers.net");
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.sendStatus(204);
});

app.post("/query", async (req, res) => {
  try {
    const response = await fetch("http://IP HERE:8000/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    res.set("Access-Control-Allow-Origin", "https://danmyers.net");
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

    res.set(
      "Content-Type",
      response.headers.get("content-type") || "application/json"
    );

    const data = await response.arrayBuffer();
    res.send(Buffer.from(data));
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(502).json({ error: "Proxy failed", details: err.message });
  }
});

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/api.danmyers.net/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/api.danmyers.net/fullchain.pem"),
};

https.createServer(options, app).listen(3001, "0.0.0.0", () => {
  console.log("HTTPS Proxy running on https://0.0.0.0:3001");
});
