
function Sidebar({ filters, setFilters, applyFilters }) {
  return (
    <div className="sidebar">
      <h3>Filters</h3>

      <h4>Type</h4>
      <input type="radio" name="type" value="Veg"
        onChange={(e) => setFilters({ ...filters, type: e.target.value })} /> Veg
      <br/>
      <input type="radio" name="type" value="Non-Veg"
        onChange={(e) => setFilters({ ...filters, type: e.target.value })} /> Non-Veg

      <h4>Sort</h4>
      <select onChange={(e) => setFilters({ ...filters, sort: e.target.value })}>
        <option value="">Select</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
}


function Sidebar({ filters, setFilters, applyFilters }) {
  return (
    <div className="sidebar">
      <h3>Filters</h3>

      <h4>Type</h4>
      <input type="radio" name="type" value="Veg"
        onChange={(e) => setFilters({ ...filters, type: e.target.value })} /> Veg
      <br/>
      <input type="radio" name="type" value="Non-Veg"
        onChange={(e) => setFilters({ ...filters, type: e.target.value })} /> Non-Veg

      <h4>Sort</h4>
      <select onChange={(e) => setFilters({ ...filters, sort: e.target.value })}>
        <option value="">Select</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
}


export default Sidebar;