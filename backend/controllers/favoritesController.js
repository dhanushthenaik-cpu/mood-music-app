// In-memory store for favorites (acts like a simple DB for college project)
let favorites = [];
let nextId = 1;

// GET /api/favorites
const getFavorites = (req, res) => {
  res.json({ success: true, count: favorites.length, favorites });
};

// POST /api/favorites
const addFavorite = (req, res) => {
  const { id, name, artist, mood, language, youtubeLink, thumbnail } = req.body;

  if (!id || !name) {
    return res.status(400).json({ success: false, message: "id and name are required" });
  }

  // Check for duplicates
  const exists = favorites.find((f) => f.id === id);
  if (exists) {
    return res.status(409).json({ success: false, message: "Song already in favorites" });
  }

  const newFav = { id, name, artist, mood, language, youtubeLink, thumbnail, addedAt: new Date().toISOString() };
  favorites.push(newFav);

  res.status(201).json({ success: true, message: "Added to favorites", favorite: newFav });
};

// DELETE /api/favorites/:id
const removeFavorite = (req, res) => {
  const { id } = req.params;
  const index = favorites.findIndex((f) => f.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Song not found in favorites" });
  }

  favorites.splice(index, 1);
  res.json({ success: true, message: "Removed from favorites" });
};

module.exports = { getFavorites, addFavorite, removeFavorite };
