import './SearchBar.css';

function SearchBar({ value = '', onChange = () => {}, placeholder = 'Meklēt produktus...' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchBar;
