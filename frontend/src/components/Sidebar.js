const MOODS = [
  { id: "all", label: "All Moods", emoji: "🎵" },
  { id: "happy", label: "Happy", emoji: "😊" },
  { id: "sad", label: "Sad", emoji: "😢" },
  { id: "focus", label: "Focus", emoji: "🎯" },
  { id: "party", label: "Party", emoji: "🎉" },
];

const LANGUAGES = [
  { id: "all", label: "All" },
  { id: "english", label: "English" },
  { id: "hindi", label: "Hindi" },
  { id: "kannada", label: "Kannada" },
  { id: "telugu", label: "Telugu" },
  { id: "tamil", label: "Tamil" }
];

function Sidebar({
  mood, setMood,
  language, setLanguage,
  activePage, setActivePage,
  darkMode, setDarkMode,
  isOpen, onClose,
  favoritesCount,
}) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">🎵</div>
        <span className="logo-text">MoodTunes</span>
      </div>

      {/* Navigation */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">Menu</div>

        <button
          className={`sidebar-item ${activePage === "home" ? "active" : ""}`}
          onClick={() => { setActivePage("home"); onClose(); }}
        >
          <span className="item-icon">🏠</span>
          Discover
        </button>

        <button
          className={`sidebar-item ${activePage === "favorites" ? "active" : ""}`}
          onClick={() => { setActivePage("favorites"); onClose(); }}
        >
          <span className="item-icon">❤️</span>
          Favorites
          {favoritesCount > 0 && (
            <span style={{
              marginLeft: "auto",
              background: "var(--accent)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: "20px",
            }}>
              {favoritesCount}
            </span>
          )}
        </button>
      </div>

      {/* Moods */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">Mood</div>
        <div className="mood-chips">
          {MOODS.map((m) => (
            <button
              key={m.id}
              className={`mood-chip mood-${m.id} ${mood === m.id ? "active" : ""}`}
              onClick={() => { setMood(m.id); onClose(); }}
            >
              {m.id !== "all" && <span className="mood-dot" />}
              <span style={{ fontSize: "14px" }}>{m.emoji}</span>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="sidebar-section">
        <div className="sidebar-section-label">Language</div>
        <div className="lang-toggle">
          {LANGUAGES.map((l) => (
            <button
              key={l.id}
              className={`lang-btn ${language === l.id ? "active" : ""}`}
              onClick={() => { setLanguage(l.id); onClose(); }}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          <span>{darkMode ? "☀️" : "🌙"}</span>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
