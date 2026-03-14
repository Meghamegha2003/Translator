import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/translate", async (req, res) => {
  const { text, from, to } = req.body;

  if (!text || !from || !to) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: text, source: from, target: to, format: "text" }),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "LibreTranslate API failed" });
    }

    const data = await response.json();
    res.json({ translatedText: data.translatedText });
  } catch (err) {
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));