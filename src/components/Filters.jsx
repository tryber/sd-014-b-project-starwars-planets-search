import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const {
    planetsSearch, setPlanetsSearch, planetsFilter, setPlanetsData,
  } = useContext(PlanetContext);

  function handleClick() {
    setPlanetsSearch({
      filters: {
        ...planetsSearch.filters,
        filterByNumericValues: [
          ...planetsSearch.filters.filterByNumericValues,
          {
            column: columnFilter,
            comparison: comparisonFilter,
            value: valueFilter,
          },
        ],
      },
    });

    const filterPlanets = planetsFilter.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return Number(planet[columnFilter]) > Number(valueFilter);
      }
      if (comparisonFilter === 'menor que') {
        return Number(planet[columnFilter]) < Number(valueFilter);
      }
      if (comparisonFilter === 'igual a') {
        return Number(planet[columnFilter]) === Number(valueFilter);
      }
      return null;
    });
    setPlanetsData(filterPlanets);
  }
  /* consultei o repositório do Levi Manoel para fazer a função  */

  return (

    <section>
      <select
        name="select-filter"
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target: { value } }) => {
          setColumnFilter(value);
        } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>

      </select>

      <input
        type="number"
        name="value-filter"
        value={ valueFilter }
        data-testid="value-filter"
        placeholder="Digite aqui o valor"
        onChange={ ({ target: { value } }) => {
          setValueFilter(value);
        } }
      />
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target: { value } }) => {
          setComparisonFilter(value);
        } }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <button
        name="button-filter"
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </section>
  );
}
export default Filters;
