
import RestaurantCard from "../components/RestaurantCard";
import Sidebar from "../components/Sidebar";
import data from "../data/restaurants.json";
import { useState, useEffect } from "react";

function Explore({ search, favorites, setFavorites }) {
  const [restaurants, setRestaurants] = useState(data);

  const [filters, setFilters] = useState({
    type: "",
    sort: ""
  });

  useEffect(() => {
  applyFilters();
}, [search, filters]);

  const applyFilters = () => {
    let filtered = [...data];

    if (filters.type) {
      filtered = filtered.filter(r => r.type === filters.type);
    }

    if (filters.sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (search) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setRestaurants(filtered);
  };

  return (
    <div className="container">
      <Sidebar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />

      <div className="content">
        {restaurants.length === 0 ? (
          <h2>No restaurants found</h2>
        ) : (
          restaurants.map(r => (
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


import RestaurantCard from "../components/RestaurantCard";
import Sidebar from "../components/Sidebar";
import data from "../data/restaurants.json";
import { useState, useEffect } from "react";

function Explore({ search, favorites, setFavorites }) {
  const [restaurants, setRestaurants] = useState(data);

  const [filters, setFilters] = useState({
    type: "",
    sort: ""
  });

  useEffect(() => {
  applyFilters();
}, [search, filters]);

  const applyFilters = () => {
    let filtered = [...data];

    if (filters.type) {
      filtered = filtered.filter(r => r.type === filters.type);
    }

    if (filters.sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (search) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setRestaurants(filtered);
  };

  return (
    <div className="container">
      <Sidebar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />

      <div className="content">
        {restaurants.length === 0 ? (
          <h2>No restaurants found</h2>
        ) : (
          restaurants.map(r => (
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