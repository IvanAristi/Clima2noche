import express from "express";
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "85ea6d9b9903ea1a1ad9f6589f427262";

  try {
  
    const { default: fetch } = await import('node-fetch');

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend service listening at http://localhost:${port}`);
});

