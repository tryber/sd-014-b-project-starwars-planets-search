import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const dropdown = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [filterByNumericValues, setNumValues] = useState();
  const { data, setFilteredData } = useContext(AppContext);

  function handleFilters({ target }) {
    setNumValues({
      ...filterByNumericValues,
      [target.id]: target.value,
    });
  }

  function setFilter() {
    const { column, comparison, value } = filterByNumericValues;
    const element = document.getElementById(column);
    const filter = data.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return planet[column] > Number(value);
      case 'menor que':
        return planet[column] < Number(value);
      case 'igual a':
        return planet[column] === value;
      default:
        return planet;
      }
    });
    setFilteredData(filter);
    element.remove();
  }

  return (
    <form>
      <select
        id="column"
        data-testid="column-filter"
        onChange={ handleFilters }
      >
        {dropdown.map((item, i) => <option key={ i } id={ item }>{item}</option>)}
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
        onChange={ handleFilters }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        id="value"
        onChange={ handleFilters }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ setFilter }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filters;
