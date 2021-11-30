import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './numericFilter.css';

const options = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

const comparison = ['maior que', 'menor que', 'igual'];

export default function NumericFilter() {
  const { filterByNumericValues, filteredPlanets,
    setFilteredPlanets } = useContext(MyContext);
  const [numValue, setNumValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 100000,
  });

  const handleChange = ({ target: { name, value } }) => {
    setNumValue({ ...numValue, [name]: value });
  };

  const handleFilter = (value) => {
    filterByNumericValues(numValue);
    filteredPlanets.filter((planet) => {
      console.log(planet[numValue.column]);
      return value;
    });
    console.log(typeof setFilteredPlanets);
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        value={ numValue.column }
        onChange={ handleChange }
      >
        {options.map((opt, i) => <option key={ i }>{opt}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ numValue.comparison }
        onChange={ handleChange }
      >
        {comparison.map((opt, i) => <option key={ i }>{opt}</option>)}
      </select>
      <label htmlFor="value">
        <input
          id="value"
          name="value"
          value={ numValue.value }
          onChange={ handleChange }
          data-testid="value-filter"
          type="number"
          placeholder="type a number"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleFilter(numValue) }
      >
        Filter
      </button>
    </form>
  );
}
