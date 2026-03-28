import RestaurantCard from "../components/RestaurantCard";

function Favorites({ favorites, setFavorites }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="content">
          {favorites.map(r => (
            <RestaurantCard
              key={r.id}
              restaurant={r}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;