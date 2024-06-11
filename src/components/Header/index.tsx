import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface HeaderProps {
  onSearch: (term: string) => void;
}

function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <h1>LunarStore</h1>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/cart">
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H4.37144C5.31982 3 6.13781 3.66607 6.32996 4.59479L8.67004 15.9052C8.86219 16.8339 9.68018 17.5 10.6286 17.5H17.5" stroke="#221E48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.82422 7H19.6743C20.3386 7 20.8183 7.6359 20.6358 8.27472L19.6217 11.8242C19.2537 13.1121 18.0765 14 16.7371 14H8.27734" stroke="#221E48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="16.5" cy="20.5" r="0.5" fill="#221E48" stroke="#221E48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="0.5" cy="0.5" r="0.5" transform="matrix(1 0 0 -1 10 21)" fill="#221E48" stroke="#221E48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Link>
      </nav>
      <form action="#" className="searchInputContainer">
        <button className="searchButton">
          <div className="searchIcon">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
            </svg>
          </div>
        </button>
        <input
          type="text"
          placeholder="Buscar produto"
          value={searchTerm}
          onChange={handleSearchChange}
          className="searchInput"
        />
      </form>
    </header>
  );
}

export default Header;
