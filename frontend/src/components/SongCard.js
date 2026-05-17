function SongCard({ song, isFavorited, onAddFavorite, onRemoveFavorite }) {
  const favorited = isFavorited(song.id);

  const handleFavClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorited) {
      onRemoveFavorite(song.id);
    } else {
      onAddFavorite(song);
    }
  };

  const moodTagClass = `card-mood-tag mood-tag-${song.mood}`;

  return (
    <div className="song-card">
      {/* Thumbnail */}
      <div className="card-thumbnail">
        <img
          src={song.thumbnail}
          alt={song.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/320x200/1a1a2e/6366f1?text=${encodeURIComponent(song.name)}`;
          }}
        />
        <div className="card-overlay">
          <a
            href={song.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="play-btn"
            title="Play on YouTube"
            onClick={(e) => e.stopPropagation()}
          >
            ▶
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <span className={moodTagClass}>{song.mood}</span>
        <div className="card-name" title={song.name}>{song.name}</div>
        <div className="card-artist" title={song.artist}>{song.artist}</div>

        <div className="card-actions">
          <a
            href={song.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-btn"
          >
            ▶ YouTube
          </a>

          <button
            className={`fav-btn ${favorited ? "favorited" : ""}`}
            onClick={handleFavClick}
            title={favorited ? "Remove from favorites" : "Add to favorites"}
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          >
            {favorited ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
