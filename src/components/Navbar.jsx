export default function Navbar({ searchQuery, onSearchQueryChange, onSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <header className="app-navbar">
      <div className="nav-left">
        <span className="app-name">App Name</span>
        <section className="search-container">
          <input
            type="text"
            placeholder="Search Location"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            onKeyPress={handleKeyPress}
            className="search-input"
          />
          <button onClick={onSearch} className="search-button">🔍</button>
        </section>
      </div>
      <aside className="nav-right">
        <button className="settings-button">⚙️</button>
      </aside>
    </header>
  );
}