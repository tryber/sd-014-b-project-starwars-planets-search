import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';

function InputNumerics() {
  const { filters, setFilters } = useContext(PlanetContext);
  const { filterByNumericValues } = filters;

  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const toFilter = { column: 'population', comparison: 'maior que', value: '0' };

  function handleChange({ target }) {
    const { name, value } = target;
    toFilter[name] = value;
  }

  function handleClick() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, toFilter],
    });
  }

  return (
    <div>
      <label htmlFor="select-column">
        Pesquisar por
        <select
          name="column"
          id="select-column"
          onChange={ handleChange }
          data-testid="column-filter"
        >
          { columns.map((each, index) => <option key={ index }>{ each }</option>) }
        </select>
      </label>
      <label htmlFor="select-comparison">
        <select
          name="comparison"
          id="select-comparison"
          onChange={ handleChange }
          data-testid="comparison-filter"
        >
          { comparisons.map((each, index) => <option key={ index }>{ each }</option>) }
        </select>
      </label>
      <label htmlFor="select-value">
        <input
          type="number"
          name="value"
          id="select-valuee"
          onChange={ handleChange }
          min="0"
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputNumerics;
