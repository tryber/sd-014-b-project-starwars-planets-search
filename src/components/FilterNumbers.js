import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style.css';

function FilterNumbers() {
  const select1 = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const { typeFilter, setTypeFilter } = useContext(StarWarsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numericValue, setNumericValue] = useState(0);

  /** Help do Fernando Serpa */
  function handleNumericFilters() {
    if (column && comparison && numericValue) {
      const numericFilter = {
        numericValue: Number(numericValue),
        column,
        comparison,
      };
      setTypeFilter([...typeFilter, numericFilter]);
      document.querySelector(`#${column}`).remove();
    } else {
      setTypeFilter([]);
    }
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        className="filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        { select1.map((optionValue, index) => (
          <option
            key={ index }
            id={ optionValue }
            value={ optionValue }
          >
            {optionValue}
          </option>
        )) }
      </select>
      <select
        data-testid="comparison-filter"
        className="filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        className="filter"
        value={ numericValue }
        onChange={ ({ target: { value } }) => setNumericValue(value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        className="filter-btn"
        onClick={ handleNumericFilters }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumbers;
