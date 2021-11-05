import React from 'react';
import NumericFilters from './NumericFilters';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="header">
      <h1>Projeto Star Wars - Trybe</h1>
      <SearchBar />
      <NumericFilters />
    </header>
  );
}

export default Header;
