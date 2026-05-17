const MOOD_LABELS = {
  all: "All Music",
  happy: "Happy Vibes 😊",
  sad: "Sad Songs 😢",
  focus: "Focus Mode 🎯",
  party: "Party Time 🎉",
};

function Controls({ searchQuery, setSearchQuery, mood, songCount }) {
  return (
    <div className="controls-bar">
      <div>
        <h1 className="page-title">
          <span>{MOOD_LABELS[mood] || "All Music"}</span>
        </h1>
      </div>

      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search songs, artists..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search songs"
        />
      </div>

      <span className="song-count">
        {songCount} {songCount === 1 ? "song" : "songs"}
      </span>
    </div>
  );
}

export default Controls;
