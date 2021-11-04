import React from 'react';
import FilterByName from './FilterByName';
import FilterNumerical from './FilterNumerical';

function Header() {
  return (
    <div>
      <p>Projeto Star Wars</p>
      <FilterByName />
      <FilterNumerical />
    </div>
  );
}

export default Header;
