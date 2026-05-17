import { useState, useEffect } from "react";
import { useSongs, useFavorites } from "./hooks/useApi";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import Favorites from "./components/Favorites";
import Controls from "./components/Controls";
import API_URL from "./config";
import "./styles/App.css";

function App() {
  const [mood, setMood] = useState("all");
  const [language, setLanguage] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const { songs, loading, usingMock, fetchSongs } = useSongs();
  const { favorites, fetchFavorites, addFavorite, removeFavorite, isFavorited } = useFavorites();

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => { fetchSongs(mood, language); }, [mood, language, fetchSongs]);
  useEffect(() => { fetchFavorites(); }, [fetchFavorites]);
  useEffect(() => { document.documentElement.className = darkMode ? "" : "light"; }, [darkMode]);

  const handleAddFavorite = async (song) => {
    const result = await addFavorite(song);
    if (result === "added") showToast(`❤️ "${song.name}" added to favorites`);
    else if (result === "duplicate") showToast("Already in your favorites!", "info");
    else showToast("Failed to add favorite", "error");
  };

  const handleRemoveFavorite = async (songId) => {
    await removeFavorite(songId);
    showToast("💔 Removed from favorites");
  };

  const filteredSongs = songs.filter((song) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return song.name.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q) || song.mood.toLowerCase().includes(q);
  });

  return (
    <div className="app">
      <nav className="mobile-nav">
        <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
        <span className="mobile-logo">🎵 MoodTunes</span>
        <button className="mobile-menu-btn" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀️" : "🌙"}</button>
      </nav>

      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

      <Sidebar mood={mood} setMood={setMood} language={language} setLanguage={setLanguage}
        activePage={activePage} setActivePage={setActivePage} darkMode={darkMode} setDarkMode={setDarkMode}
        isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} favoritesCount={favorites.length} />

      <main className="main-content">
        {usingMock && API_URL && (
          <div className="error-banner">⚠️ Backend not reachable — showing built-in songs. Favorites saved to browser storage.</div>
        )}
        {activePage === "home" ? (
          <>
            <Controls searchQuery={searchQuery} setSearchQuery={setSearchQuery} mood={mood} songCount={filteredSongs.length} />
            <SongList songs={filteredSongs} loading={loading} isFavorited={isFavorited} onAddFavorite={handleAddFavorite} onRemoveFavorite={handleRemoveFavorite} />
          </>
        ) : (
          <Favorites favorites={favorites} isFavorited={isFavorited} onAddFavorite={handleAddFavorite} onRemoveFavorite={handleRemoveFavorite} />
        )}
      </main>
      {toast && <div className={`toast ${toast.type}`}>{toast.message}</div>}
    </div>
  );
}

export default App;
