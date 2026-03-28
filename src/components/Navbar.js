
import { Link } from "react-router-dom";

function Navbar({ setSearch, setDark, dark }) {
  return (
    <div className="navbar">
      <div className="nav-left">FlavorRoute 🍽️</div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}


import { Link } from "react-router-dom";

function Navbar({ setSearch, setDark, dark }) {
  return (
    <div className="navbar">
      <div className="nav-left">FlavorRoute 🍽️</div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="nav-right">
        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}


export default Navbar;