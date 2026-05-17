const express = require("express");
const router = express.Router();
const { getSongs } = require("../controllers/songsController");

// GET /api/songs
router.get("/", getSongs);

module.exports = router;
