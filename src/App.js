import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BillCalculator from "./components/BillCalculator";
import SignaturePad from "./components/SignaturePad";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [favorites, setFavorites] = useState([]);

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar setSearch={setSearch} setDark={setDark} dark={dark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/explore"
          element={
            <Explore
              search={search}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>

      <BillCalculator />
      <SignaturePad />
      <Footer />
    </div>
  );
}

export default App;