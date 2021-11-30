import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './numericFilter.css';

// parte desse código foi inpirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/components/FilterNumeric.jsx

const optionsList = ['population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

const selectList = ['name', 'population', 'orbital_period', 'diameter', 'rotation_period',
  'surface_water'];

const comparisonList = ['maior que', 'menor que', 'igual a'];

export default function NumericFilter() {
  const { filterByNumericValue, orderFilter } = useContext(MyContext);
  const [numValue, setNumValue] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });
  const [options, setOptions] = useState(optionsList);
  const [orderSort, setOrderSort] = useState({ column: 'name', sort: 'ASC' });

  const handleChange = ({ target: { name, value } }) => {
    setNumValue({ ...numValue, [name]: value });
  };

  const handleFilter = () => {
    const { column } = numValue;
    filterByNumericValue(numValue);
    const newColumns = options.filter((newcolumn) => column !== newcolumn);
    setOptions(newColumns);
  };

  const handleOrder = ({ target: { name, value } }) => {
    setOrderSort({ ...orderSort, [name]: value });
  };

  const orderClick = () => {
    orderFilter(orderSort);
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
      <select
        data-testid="column-sort"
        name="column"
        value={ orderSort.column }
        onChange={ handleOrder }
      >
        {selectList.map((opt, i) => <option key={ i }>{opt}</option>)}
      </select>
      <label htmlFor="up">
        Ascendente
        <input
          onChange={ handleOrder }
          data-testid="column-sort-input-asc"
          id="up"
          name="sort"
          type="radio"
          value="ASC"
        />
      </label>
      <label htmlFor="down">
        Descendente
        <input
          onChange={ handleOrder }
          name="sort"
          data-testid="column-sort-input-desc"
          id="down"
          type="radio"
          value="DESC"
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ orderClick }
      >
        Ordenar
      </button>
    </form>
  );
}
