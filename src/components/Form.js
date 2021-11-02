import React, { useContext, useState } from 'react';
import StarContext from '../context/Context';

const FilterPlanet = () => {
  const [filterValue, serFilterValue] = useState([]);
  const { setName } = useContext(StarContext);

  const handleChange = (value) => {
    setName(value);
    serFilterValue(value);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterValue }
        onChange={ ({ target: { value } }) => handleChange(value) }
        placeholder="Search"
      />
    </form>
  );
};

export default FilterPlanet;
