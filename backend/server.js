const express = require("express");
const cors = require("cors");

const songsRoutes = require("./routes/songs");
const favoritesRoutes = require("./routes/favorites");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow all origins (needed for Netlify frontend → Render backend)
app.use(cors());
app.use(express.json());

app.use("/api/songs", songsRoutes);
app.use("/api/favorites", favoritesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "🎵 Mood Music API is running!", version: "1.0.0" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`\n🎵 Mood Music API running at http://localhost:${PORT}`);
  console.log(`   GET  /api/songs?mood=happy&language=english`);
  console.log(`   GET  /api/favorites`);
  console.log(`   POST /api/favorites`);
  console.log(`   DELETE /api/favorites/:id\n`);
});
