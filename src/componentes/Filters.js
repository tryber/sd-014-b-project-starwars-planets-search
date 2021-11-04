import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Filters = () => {
  const { filters: {
    filters: {
      filterByName: {
        name,
      },
    },
  }, handleFilters } = useContext(DataContext);

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
            onChange={ handleFilters }
          />
        </label>
      </form>
    </div>
  );
};

export default Filters;
