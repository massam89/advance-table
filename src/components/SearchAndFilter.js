const SearchAndFilter = () => {
  return (
    <div className="search-filter">
      <form>
        <div>
          <i className="bi bi-search"></i>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            autoComplete="off"
            autoFocus
          />
        </div>

        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </form>
    </div>
  );
};

export default SearchAndFilter;
