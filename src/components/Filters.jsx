import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filters() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');
  const {
    planetsSearch, setPlanetsSearch, planetsFilter, setPlanetsData,
    columnFilterValue, setColumnFilterValue,
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
    setColumnFilterValue(columnFilterValue.filter((column) => column !== columnFilter));
    setPlanetsData(filterPlanets);
  }
  /* consultei o repositório do Levi Manoel para fazer a função handleClick
  link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/86/commits/c163ddcd6203b6dff254649517fd0afef0e637de */

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
        { columnFilterValue.map((column, key) => (
          <option key={ key } value={ column }>{ column }</option>
        )) }

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
