const express = require("express");
const router = express.Router();
const { getFavorites, addFavorite, removeFavorite } = require("../controllers/favoritesController");

// GET /api/favorites
router.get("/", getFavorites);

// POST /api/favorites
router.post("/", addFavorite);

// DELETE /api/favorites/:id
router.delete("/:id", removeFavorite);

module.exports = router;
