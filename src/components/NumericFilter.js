import React from 'react';

const options = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const valueRange = ['maior que', 'menor que', 'igual a'];

function NumericFilter() {
  return (
    <form>
      <select data-testid="column-filter">
        {options.map((item, index) => (
          <option key={ index }>{ item }</option>
        ))}
      </select>

      <select data-testid="comparison-filter">
        {valueRange.map((item, index) => (
          <option key={ index }>{ item }</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
      />
      <button data-testid="button-filter" type="button">Filtrar</button>
    </form>
  );
}

export default NumericFilter;
