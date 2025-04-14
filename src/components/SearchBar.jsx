function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by description or category..."
        />
      </div>
    );
  }
  
  export default SearchBar;