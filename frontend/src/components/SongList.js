import SongCard from "./SongCard";

function SongList({ songs, loading, isFavorited, onAddFavorite, onRemoveFavorite }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <p>Loading songs...</p>
      </div>
    );
  }

  if (songs.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🎵</div>
        <h3>No songs found</h3>
        <p>Try a different mood, language, or search term.</p>
      </div>
    );
  }

  return (
    <div className="song-grid">
      {songs.map((song, index) => (
        <div key={song.id} style={{ animationDelay: `${index * 0.04}s` }}>
          <SongCard
            song={song}
            isFavorited={isFavorited}
            onAddFavorite={onAddFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        </div>
      ))}
    </div>
  );
}

export default SongList;
