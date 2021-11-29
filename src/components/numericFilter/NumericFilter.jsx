import React from 'react';
import './numericFilter.css';

export default function NumericFilter() {
  const options = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <form>
      <select data-testid="column-filter">
        {options.map((opt, i) => <option key={ i }>{opt}</option>)}
      </select>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          placeholder="type a number"
        />
      </label>
      <button data-testid="button-filter" type="button">Add Filter</button>
    </form>
  );
}
