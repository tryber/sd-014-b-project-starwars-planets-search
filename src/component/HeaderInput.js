import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function HeaderInput() {
  const { handleChange } = useContext(PlanetContext);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ (event) => {
          handleChange(event.target.value);
        } }
      />
    </div>
  );
}

export default HeaderInput;
