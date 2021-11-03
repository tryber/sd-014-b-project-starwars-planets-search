import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Filters = () => {
  const { handleChange, handleSelectOptions,
    handleFilterButtonClick } = useContext(PlanetsContext);
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
        name="column"
        onChange={ ({ target: { name, value } }) => handleSelectOptions(
          name, value,
        ) }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ ({ target }) => handleSelectOptions(
          target.name, target.value,
        ) }
      >
        <option>menor que</option>
        <option>igual a</option>
        <option>maior que</option>
      </select>
      <input
        type="number"
        placeholder="insira um valor"
        data-testid="value-filter"
        name="value"
        onChange={ (e) => handleSelectOptions(
          e.target.name, e.target.value,
        ) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleFilterButtonClick() }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
