import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByName = () => {
  const { setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setFilters({
      filterByName: { name: target.value },
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filter By Name"
      onChange={ handleChange }
    />
  );
};

export default FilterByName;
