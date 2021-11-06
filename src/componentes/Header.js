import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Filters from './Filters';

const Header = () => {
  const { filters: { filters: { filterByName: { name } } },
    handleFilterByName } = useContext(DataContext);

  return (
    <div>
      <form>
        <label htmlFor="name">
          Planet Name:
          <input
            data-testid="name-filter"
            name="name"
            type="text"
            value={ name }
            onChange={ handleFilterByName }
          />
        </label>
      </form>
      <Filters />
    </div>
  );
};

export default Header;
