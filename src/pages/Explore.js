import RestaurantCard from "../components/RestaurantCard";
import Sidebar from "../components/Sidebar";
import data from "../data/restaurants.json";
import { useState } from "react";

function Explore({ search, favorites, setFavorites }) {
  // Store all filter states in one object
  const [filters, setFilters] = useState({
    type: "All",
    sortPrice: "", // "low", "high"
    minRating: 0,
    vegOnly: false
  });

  // Calculate filtered list directly (React Best Practice)
  let filteredRestaurants = data.filter(r => {
    // 1. Search text
    if (search && !r.name.toLowerCase().includes(search.toLowerCase())) return false;
    // 2. Category type
    if (filters.type !== "All" && r.type !== filters.type) return false;
    // 3. Veg Only
    if (filters.vegOnly && !r.veg) return false;
    // 4. Minimum Rating
    if (filters.minRating > 0 && r.rating < filters.minRating) return false;
    
    return true; // Keep the restaurant if it passes all checks
  });

  // 5. Sort by Price
  if (filters.sortPrice === "low") {
    filteredRestaurants.sort((a, b) => a.price - b.price);
  } else if (filters.sortPrice === "high") {
    filteredRestaurants.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container">
      {/* Pass the state AND the setter down to the Sidebar */}
      <Sidebar filters={filters} setFilters={setFilters} />

      <div className="content">
        {filteredRestaurants.length === 0 ? (
          <h2>No restaurants found matching your filters.</h2>
        ) : (
          filteredRestaurants.map(r => (
            <RestaurantCard
              key={r.id}
              restaurant={r}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Explore;