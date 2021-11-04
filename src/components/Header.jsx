import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Header = () => {
  const { filters: { filterByName, setFilterByName } } = useContext(MyContext);
  return (
    <header>
      <input
        data-testid="name-filter"
        value={ filterByName }
        onChange={ ({ target }) => setFilterByName(target.value) }
      />
    </header>);
};

export default Header;
