import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filters = () => {
  const { handleChange } = useContext(PlanetsContext);
  return (
    <div>
      <input
        type="text"
        placeholder="faça sua busca"
        onChange={ ({ target: { value } }) => handleChange(value) }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="value-filter"
      >
        <option>menor que</option>
        <option>igual a</option>
        <option>maior que</option>
      </select>
      <input
        type="number"
        placeholder="insira um valor"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
