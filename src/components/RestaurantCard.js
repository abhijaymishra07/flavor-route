import { useState } from "react";

function RestaurantCard({ restaurant, favorites, setFavorites }) {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const isFav = favorites.some(r => r.id === restaurant.id);

  return (
    <div className="card">
      <img src={restaurant.image} alt={restaurant.name} />

      <h3>{restaurant.name}</h3>
      <p className="cuisine">{restaurant.cuisine}</p>
      <p className="price">₹{restaurant.price}</p>
      <p className="rating">⭐ {restaurant.rating}</p>

      <button onClick={() => {
        if (!isFav) {
          setFavorites([...favorites, restaurant]);
        }
      }}>
        {isFav ? "❤️ Added" : "🤍 Add"}
      </button>

      <input
        placeholder="Write review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={() => {
        if (review) {
          setReviews([...reviews, review]);
          setReview("");
        }
      }}>
        Add
      </button>

      <ul>
        {reviews.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}

export default RestaurantCard;