const songs = require("../data/songs");

// GET /api/songs?mood=happy&language=english
const getSongs = (req, res) => {
  const { mood, language } = req.query;

  let filtered = [...songs];

  if (mood && mood !== "all") {
    filtered = filtered.filter((s) => s.mood === mood.toLowerCase());
  }

  if (language && language !== "all") {
    filtered = filtered.filter((s) => s.language === language.toLowerCase());
  }

  res.json({ success: true, count: filtered.length, songs: filtered });
};

module.exports = { getSongs };
