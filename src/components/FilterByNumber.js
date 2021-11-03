import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterByNumber() {
  const { filterByNumber, filtersToSelect } = useContext(Context);
  return (
    <div>
      <select data-testid="column-filter">
        {
          filtersToSelect.map((category, index) => (
            <option key={ index }>{category}</option>
          ))
        }
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        min="0"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterByNumber }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
