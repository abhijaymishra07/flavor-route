import React from 'react';

function Sidebar({ filters, setFilters }) {
  const categories = ['All', 'American', 'Italian', 'Indian', 'Japanese', 'Mexican', 'Chinese', 'Thai', 'Mediterranean', 'Korean'];

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map((cat, index) => {
          const isActive = filters.type === cat;
          return (
            <li 
              key={index} 
              className={`category-item ${isActive ? 'active' : ''}`}
              onClick={() => updateFilter("type", cat)}
            >
              {cat}
            </li>
          );
        })}
      </ul>

      <hr className="divider" />

      <h3>Filters</h3>

      <div className="filter-group">
        <label>
          <input 
            type="checkbox" 
            checked={filters.vegOnly}
            onChange={(e) => updateFilter("vegOnly", e.target.checked)}
          />
          Veg Only 🥦
        </label>
      </div>

      <div className="filter-group">
        <label>Price:</label>
        <select 
          value={filters.sortPrice} 
          onChange={(e) => updateFilter("sortPrice", e.target.value)}
        >
          <option value="">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Rating:</label>
        <select 
          value={filters.minRating} 
          onChange={(e) => updateFilter("minRating", Number(e.target.value))}
        >
          <option value="0">Any Rating</option>
          <option value="4.0">4.0+ ⭐</option>
          <option value="4.5">4.5+ ⭐</option>
          <option value="4.8">4.8+ ⭐</option>
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;