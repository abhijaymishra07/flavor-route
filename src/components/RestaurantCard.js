import { useState } from "react";

function RestaurantCard({ restaurant }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={restaurant.image} alt={restaurant.name} />

      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>₹{restaurant.price}</p>
      <p>⭐ {restaurant.rating}</p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default RestaurantCard;