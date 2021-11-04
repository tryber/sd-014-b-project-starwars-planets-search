import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Select() {
  const {
    data, setFilters, filters, setPlanetsUpdated,
    filters: { filterByNumericValues: [{ column, comparison, value: stateValue }] },
  } = useContext(PlanetsContext);

  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const comparisons = ['maior que', 'menor que', 'igual a'];

  function filterByNum({ target: { name, value } }) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  }

  function submitFilter() {
    //  Number() está encapsulando os valores que estavam como string, para que possam ser feitas as comparações matemáticas

    const filteredPlanets = data.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > stateValue;
      case 'menor que':
        return Number(planet[column]) < stateValue;
      case 'igual a':
        return Number(planet[column]) === Number(stateValue);
      default:
        return planet;
      }
    });
    setPlanetsUpdated(filteredPlanets);
  }

  return (
    <>
      <select onChange={ filterByNum } name="column" data-testid="column-filter">
        { columns.map((item) => <option key={ item }>{ item }</option>) }
      </select>
      <select onChange={ filterByNum } name="comparison" data-testid="comparison-filter">
        { comparisons.map((item) => <option key={ item }>{ item }</option>)}
      </select>
      <input
        onChange={ filterByNum }
        name="value"
        type="number"
        data-testid="value-filter"
      />
      <button
        type="button"
        name="button-filter"
        data-testid="button-filter"
        onClick={ submitFilter }
      >
        Filtrar
      </button>
    </>
  );
}

export default Select;
