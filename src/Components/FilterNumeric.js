import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterNumeric() {
  const selectEquality = ['maior que', ' menor que', 'igual a'];

  const {
    // lisPlanets,
    currentFilter,
    setCurrentFilter,
    setListPlanets,
    filters,
    arrayColumns,
    setArrayColumns,
    resetList,
  } = useContext(MyContext);

  const { filterByNumericValues } = filters;

  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function handleFilterNumeric({ comparison, column, value }) {
    switch (comparison) {
    case 'maior que':
      return setListPlanets(resetList
        .filter((planet) => Number(planet[column]) > Number(value)));

    case 'menor que':
      return setListPlanets(resetList
        .filter((planet) => Number(planet[column]) < Number(value)));

    case 'igual a':
      return setListPlanets(resetList
        .filter((planet) => Number(planet[column]) === Number(value)));

    default:
      return null;
    }
  }

  function handleClick() {
    console.log(filters);
    console.log(currentFilter);
    console.log(arrayColumns);
    handleFilterNumeric(currentFilter);
    filterByNumericValues.push(currentFilter);

    const filterColumn = arrayColumns.filter((item) => item !== currentFilter.column);

    setArrayColumns(filterColumn);
  }

  const { column, comparison, value } = currentFilter;

  return (
    <section>
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ handleChange }
      >
        { arrayColumns
          .map((columnName, index) => <option key={ index }>{ columnName }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparison }
        onChange={ handleChange }
      >
        {selectEquality
          .map((name, index) => <option key={ index }>{ name }</option>)}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        value={ value }
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </section>
  );
}

export default FilterNumeric;
