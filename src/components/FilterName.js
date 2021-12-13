import React, { useState, useContext } from 'react';
import NewContext from '../context/NewContext';

function FilterName() {
  const { setFilter } = useContext(NewContext);
  const [namePlanet, setNamePlanet] = useState('');
  const handleChange = (value) => {
    setNamePlanet(value);
    setFilter(value);
  };
  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ namePlanet }
        onChange={ ({ target: { value } }) => handleChange(value) }
        placeholder="Filtrar por nome"
        name="namePlanet"
        className="name-planet"
      />
    </form>
  );
}

export default FilterName;
