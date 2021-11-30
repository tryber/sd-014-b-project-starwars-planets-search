import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './numericFilter.css';

// parte desse código foi inpirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/components/FilterNumeric.jsx

const options = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

const comparisonList = ['maior que', 'menor que', 'igual a'];

export default function NumericFilter() {
  const { filterByNumericValues, filteredPlanets,
    setFilteredPlanets } = useContext(MyContext);
  const [numValue, setNumValue] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target: { name, value } }) => {
    setNumValue({ ...numValue, [name]: value });
  };

  const handleFilter = () => {
    const { column, comparison, value } = numValue;
    filterByNumericValues(numValue);
    const filterNumeric = filteredPlanets.filter((planet) => {
      if (comparison === 'maior que') {
        return +planet[column] > +value;
      } if (comparison === 'menor que') {
        return +planet[column] < +value;
      } if (comparison === 'igual a') {
        return +planet[column] === +value;
      } return filterNumeric;
    });
    setFilteredPlanets(filterNumeric);
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
        {comparisonList.map((opt, i) => <option key={ i }>{opt}</option>)}
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
        onClick={ handleFilter }
      >
        Filter
      </button>
    </form>
  );
}
