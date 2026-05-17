// ─────────────────────────────────────────────────────────────
//  API Configuration
//
//  For Netlify deployment, set the environment variable:
//    REACT_APP_API_URL=https://your-backend.onrender.com
//
//  If not set, the app uses built-in mock data (works offline).
// ─────────────────────────────────────────────────────────────

const API_URL = process.env.REACT_APP_API_URL || "";

export default API_URL;
