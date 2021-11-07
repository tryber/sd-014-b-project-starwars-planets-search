import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function FilterValue() {
  const [form, setform] = useState({});
  const { state, setState } = useContext(PlanetContext);

  function handleChange({ target: { id, value } }) {
    setform({
      ...form,
      [id]: value,
    });
  }

  function handleSubmit() {
    setState({
      ...state,
      filters: { ...state.filters, filterByNumericValues: [form] },
    });

    const { comparison, column, value } = form;
    const { filteredPlanets } = state;

    switch (comparison) {
    case 'maior que':
      setState({ ...state,
        planets: filteredPlanets.filter((a) => Number(a[column]) > value) });
      break;
    case 'menor que':
      setState({ ...state, planets: filteredPlanets.filter((a) => a[column] <= value) });
      break;
    case 'igual a':
      setState({ ...state, planets: filteredPlanets.filter((a) => a[column] === value) });
      break;
    default:
      return 'erro';
    }
  }

  return (
    <form>
      <label htmlFor="column">
        <select id="column" onChange={ handleChange } data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select id="comparison" onChange={ handleChange } data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        data-testid="value-filter"
        id="value"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterValue;
