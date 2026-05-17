# 🎵 MoodTunes — Mood Music App (CIA-3 Full Stack Project)

A full-stack web application built with **React + Node.js + Express** that recommends music based on your mood and language preference. Features a premium Spotify-inspired UI.

---

## 📁 Project Structure

```
mood-music-app/
├── backend/
│   ├── controllers/
│   │   ├── songsController.js      # Song filtering logic
│   │   └── favoritesController.js  # Favorites CRUD logic
│   ├── data/
│   │   └── songs.js                # Song dataset (32 songs)
│   ├── routes/
│   │   ├── songs.js                # /api/songs routes
│   │   └── favorites.js            # /api/favorites routes
│   ├── server.js                   # Express server entry point
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Sidebar.js          # Left sidebar (mood, language, nav)
    │   │   ├── Controls.js         # Search bar + page title
    │   │   ├── SongList.js         # Grid of song cards
    │   │   ├── SongCard.js         # Individual song card
    │   │   └── Favorites.js        # Favorites page
    │   ├── styles/
    │   │   └── App.css             # All styles (Spotify-like)
    │   ├── App.js                  # Main component + state
    │   └── index.js                # React entry point
    └── package.json
```

---

## 🚀 How to Run

### Step 1 — Start the Backend

```bash
cd mood-music-app/backend
npm install
npm run dev
```

Backend runs on: **http://localhost:5000**

> For `npm run dev` to work you need `nodemon`. If not, use `npm start`.

---

### Step 2 — Start the Frontend

```bash
cd mood-music-app/frontend
npm install
npm start
```

Frontend runs on: **http://localhost:3000**

---

## 🔌 REST API Reference

### GET /api/songs

Returns songs filtered by mood and/or language.

```
GET http://localhost:5000/api/songs
GET http://localhost:5000/api/songs?mood=happy
GET http://localhost:5000/api/songs?language=hindi
GET http://localhost:5000/api/songs?mood=sad&language=english
```

**Response:**
```json
{
  "success": true,
  "count": 4,
  "songs": [
    {
      "id": "1",
      "name": "Happy",
      "artist": "Pharrell Williams",
      "mood": "happy",
      "language": "english",
      "youtubeLink": "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
      "thumbnail": "https://img.youtube.com/vi/ZbZSe6N_BXs/hqdefault.jpg"
    }
  ]
}
```

---

### GET /api/favorites

Returns all favorited songs.

```
GET http://localhost:5000/api/favorites
```

---

### POST /api/favorites

Add a song to favorites.

```
POST http://localhost:5000/api/favorites
Content-Type: application/json

{
  "id": "1",
  "name": "Happy",
  "artist": "Pharrell Williams",
  "mood": "happy",
  "language": "english",
  "youtubeLink": "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
  "thumbnail": "https://img.youtube.com/vi/ZbZSe6N_BXs/hqdefault.jpg"
}
```

---

### DELETE /api/favorites/:id

Remove a song from favorites.

```
DELETE http://localhost:5000/api/favorites/1
```

---

## 🎨 Features

| Feature | Status |
|---|---|
| Mood filtering (Happy, Sad, Focus, Party) | ✅ |
| Language selection (English, Hindi, All) | ✅ |
| Real-time search | ✅ |
| Add/Remove favorites | ✅ |
| Dark / Light mode | ✅ |
| Spotify-style UI | ✅ |
| YouTube links | ✅ |
| Toast notifications | ✅ |
| Responsive design | ✅ |
| REST API integration | ✅ |

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Axios, CSS Variables |
| Backend | Node.js, Express |
| Data | In-memory array (no DB required) |
| API | RESTful JSON API |

---

## 📝 Notes

- **No MongoDB needed** — data is stored in memory (resets on server restart). This is intentional for simplicity.
- The proxy in `frontend/package.json` routes `/api/*` calls to `localhost:5000` during development.
- To add MongoDB later, replace the in-memory `favorites` array in `favoritesController.js` with Mongoose models.
