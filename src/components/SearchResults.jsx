export default function SearchResults({ results, onSelectLocation }) {
  if (!results || results.length === 0) {
    return (
      <section className="search-results">
        <h2 className="results-title">Search Results</h2>
        <p>No results found. Try another search.</p>
      </section>
    );
  }

  return (
    <section className="search-results">
      <h2 className="results-title">Search Results</h2>
      {results.map((result) => (
        <button key={result.id} className="result-item" onClick={() => onSelectLocation(result)}>
          <div className="result-icon">📍</div>
          <div className="result-info">
            <div className="result-location">{result.name}</div>
            <div className="result-country">{result.country}</div>
          </div>
        </button>
      ))}
    </section>
  );
}
