import SongCard from "./SongCard";

function Favorites({ favorites, isFavorited, onAddFavorite, onRemoveFavorite }) {
  return (
    <div>
      <div className="favorites-header">
        <h2>❤️ Your Favorites</h2>
        <p>
          {favorites.length === 0
            ? "No favorites yet — add some songs!"
            : `${favorites.length} song${favorites.length !== 1 ? "s" : ""} saved`}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💔</div>
          <h3>No favorites yet</h3>
          <p>
            Go to Discover and tap the heart icon on any song to save it here.
          </p>
        </div>
      ) : (
        <div className="song-grid">
          {favorites.map((song, index) => (
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
      )}
    </div>
  );
}

export default Favorites;
