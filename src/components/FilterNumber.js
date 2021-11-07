import React, { useContext } from 'react';
import './table.css';
import DataContext from '../context/DataContext';
import response from '../testData';

function FilterNumber() {
  const {
    setColumn, comparison,
    column, valor, setComparison, setData, setValor } = useContext(DataContext);

  function filterList() {
    const filterNumber = response.results.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(valor);
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(valor);
      }
      if (comparison === 'igual a') {
        return planet[column] === valor;
      }
      return planet;
    });
    setData(filterNumber);
  }

  return (
    <div>
      <label htmlFor="columnFilter">
        <select
          id="columnFilter"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparisonFilter">
        <select
          id="comparisonFilter"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="valueFilter">
        <input
          id="valueFilter"
          data-testid="value-filter"
          onChange={ (event) => setValor(event.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterList }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumber;
