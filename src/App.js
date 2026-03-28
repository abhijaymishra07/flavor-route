import "./App.css";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import Sidebar from "./components/Sidebar";
import BillCalculator from "./components/BillCalculator";
import SignaturePad from "./components/SignaturePad";
import Footer from "./components/Footer";
import data from "./data/restaurants.json";
import { useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState(data);

  const [filters, setFilters] = useState({
    type: "",
    cuisine: [],
    sort: ""
  });

  const applyFilters = () => {
    let filtered = [...data];

    if (filters.type) {
      filtered = filtered.filter(r => r.type === filters.type);
    }

    if (filters.cuisine.length > 0) {
      filtered = filtered.filter(r =>
        filters.cuisine.includes(r.cuisine)
      );
    }

    if (filters.sort === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setRestaurants(filtered);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
        />

        <div className="content">
          {restaurants.length === 0 ? (
            <h2>No restaurants found</h2>
          ) : (
            restaurants.map(r => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))
          )}
        </div>
      </div>

      <BillCalculator />
      <SignaturePad />
      <Footer />
    </div>
  );
}

export default App;