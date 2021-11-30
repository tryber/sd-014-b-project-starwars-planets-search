import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import SortFilter from './SortFilter';

function SearchInput() {
  const { filters, setFilters } = useContext(PlanetsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  return (
    <div>
      <label htmlFor="searchByName">
        Procurar pelo nome:
        {' '}
        <input
          id="searchByName"
          data-testid="name-filter"
          type="text"
          placeholder="Insira o nome..."
          onChange={ handleChange }
        />
      </label>
      <SortFilter />
    </div>
  );
}

export default SearchInput;
