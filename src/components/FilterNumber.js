import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumber() {
  const { data, setPlanets, fetch } = useContext(PlanetsContext);
  const [setPlanetFilter] = useState([]);
  const [filters, setFilters] = useState({
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 100000,
    },
  });

  async function fetchPlanets() {
    const dataPlanets = await fetch();
    setPlanetFilter(dataPlanets);
  }

  function handleChange({ target }) {
    const filter = filters;
    console.log(filter.filterByNumericValues.column);
    filter.filterByNumericValues[target.name] = target.value;
    setFilters(filter);
  }

  function filterSubmit() {
    fetchPlanets();
    const { filterByNumericValues: { column, comparison, value } } = filters;
    if (comparison === 'menor que') {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column] < value));
      setPlanets(dataReturn);
    } else {
      const dataReturn = data.filter((
        planet,
      ) => Number(planet[column]) > value);
      setPlanets(dataReturn);
    }
  }

  return (
    <div>
      <label htmlFor="filterNumber">
        <select
          name="column"
          data-testid="column-filter"
          id="filterNumber"
          onChange={ handleChange }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
