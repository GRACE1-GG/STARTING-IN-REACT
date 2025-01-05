import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">RISE KENYAN YOUTH</Link>
      </div>
      <div className="navbar-search">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <nav className="navbar-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
