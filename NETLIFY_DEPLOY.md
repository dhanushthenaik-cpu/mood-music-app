# 🎵 MoodTunes — Netlify Deployment Guide

## Project Structure

```
mood-music-app/
├── netlify.toml                ← Netlify build config (DO NOT DELETE)
├── frontend/                   ← Deploy this to Netlify
│   ├── public/
│   │   ├── index.html
│   │   └── _redirects          ← SPA routing fix (DO NOT DELETE)
│   ├── src/
│   │   ├── App.js
│   │   ├── config.js           ← Set your backend URL here
│   │   ├── mockData.js         ← 32 songs (fallback if no backend)
│   │   ├── hooks/
│   │   │   └── useApi.js       ← Smart API hook (backend + fallback)
│   │   ├── components/
│   │   │   ├── Sidebar.js
│   │   │   ├── Controls.js
│   │   │   ├── SongList.js
│   │   │   ├── SongCard.js
│   │   │   └── Favorites.js
│   │   └── styles/
│   │       └── App.css
│   └── package.json
└── backend/                    ← Deploy this to Render / Railway
    ├── server.js
    ├── routes/
    ├── controllers/
    ├── data/songs.js
    └── package.json
```

---

## ✅ OPTION A — Deploy Frontend Only (Simplest, Works Immediately)

The app works **100% without a backend**. Songs are built-in, favorites are saved to browser localStorage.

### Steps:

1. **Go to** https://app.netlify.com → **"Add new site"** → **"Import an existing project"**

2. **Connect your GitHub repo** (push this folder to GitHub first):
   ```bash
   cd mood-music-app
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/mood-music-app.git
   git push -u origin main
   ```

3. **Netlify Build Settings** (auto-filled from `netlify.toml`):
   - Base directory: `frontend`
   - Build command: `npm install && npm run build`
   - Publish directory: `frontend/build`

4. Click **Deploy Site** — done! 🎉

---

## ✅ OPTION B — Deploy Frontend + Backend (Full Stack)

### Step 1 — Deploy Backend to Render (Free)

1. Go to https://render.com → New → **Web Service**
2. Connect your GitHub repo
3. Settings:
   - **Root directory:** `backend`
   - **Build command:** `npm install`
   - **Start command:** `node server.js`
4. Deploy → copy your backend URL:
   ```
   https://mood-music-backend-xxxx.onrender.com
   ```

### Step 2 — Set Environment Variable on Netlify

In your Netlify site → **Site configuration** → **Environment variables** → Add:

```
Key:   REACT_APP_API_URL
Value: https://mood-music-backend-xxxx.onrender.com
```

Then **Trigger a redeploy** → your frontend now talks to the real backend!

---

## 🏃 Run Locally

```bash
# Terminal 1 — Backend
cd backend
npm install
node server.js          # runs on http://localhost:5000

# Terminal 2 — Frontend
cd frontend
npm install
npm start               # runs on http://localhost:3000
```

For local dev with backend, add a `.env` file inside `frontend/`:
```
REACT_APP_API_URL=http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/songs` | All songs |
| GET | `/api/songs?mood=happy` | Filter by mood |
| GET | `/api/songs?language=hindi` | Filter by language |
| GET | `/api/songs?mood=party&language=english` | Both filters |
| GET | `/api/favorites` | Get favorites |
| POST | `/api/favorites` | Add favorite |
| DELETE | `/api/favorites/:id` | Remove favorite |

---

## 🎯 How the Smart Fallback Works

```
App starts
    ↓
REACT_APP_API_URL set?
    ├── NO  → use mockData.js + localStorage  (Netlify only)
    └── YES → try backend API
                  ├── SUCCESS → use real API data
                  └── FAIL    → fallback to mockData + localStorage
```

Every feature works in all scenarios. ✅
