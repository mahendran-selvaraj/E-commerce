import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { allProducts } = useContext(ShopContext);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm.length > 1) {
      const matches = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
      setResults(matches);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (product) => {
    navigate(`/display/${product.id}`);
    setQuery('');
    setResults([]);
  };

  const highlightMatch = (text) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;
    
    return (
      <>
        {text.substring(0, index)}
        <span className="text-warning fw-bold">{text.substring(index, index + query.length)}</span>
        {text.substring(index + query.length)}
      </>
    );
  };

  return (
    <div className="position-relative" ref={searchRef}>
      <div className="input-group">
        <span className="input-group-text">
          <Search size={20} />
        </span>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for products..."
          aria-label="Search products"
        />
      </div>
      
      {isFocused && results.length > 0 && (
        <div className="list-group position-absolute w-100 shadow bg-white" style={{ zIndex: 1000, top: '100%' }}>
          {results.map(product => (
            <div 
              key={product.id}
              className="list-group-item list-group-item-action d-flex align-items-center"
              onClick={() => handleResultClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={product.url} 
                alt={product.name} 
                className="me-3" 
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
              <div>
                <div className="fw-bold">{highlightMatch(product.name)}</div>
                <small className="text-muted">{highlightMatch(product.description)}</small>
                <div className="fw-bold text-success">Rs {product.price.toFixed(2)}/-</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {isFocused && query.length > 1 && results.length === 0 && (
        <div className="list-group position-absolute w-100 shadow bg-white" style={{ zIndex: 1000, top: '100%' }}>
          <div className="list-group-item text-center text-muted">No products found</div>
        </div>
      )}
    </div>
  );
}
