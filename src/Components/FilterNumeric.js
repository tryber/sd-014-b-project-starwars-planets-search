import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterNumeric() {
  const selectEquality = ['maior que', 'igual a', 'menor que'];

  const {
    listPlanets,
    currentFilter,
    setCurrentFilter,
    setListPlanets,
    filters,
    arrayColumns,
    setArrayColumns,
  } = useContext(MyContext);

  const { filterByNumericValues } = filters;

  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function handleFilterNumeric({ comparison, column, value }) {
    const filterNumeric = listPlanets.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        return null;
      }
    });
    return setListPlanets(filterNumeric);
  }

  function handleClick() {
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

// function handleFilterNumeric(element) {
//   const { comparison, column, value } = element;
//   switch (comparison) {
//   case 'maior que':
//     return setListPlanets(listPlanets
//       .filter((planet) => Number(planet[column]) > Number(value)));

//   case 'menor que':
//     return setListPlanets(listPlanets
//       .filter((planet) => Number(planet[column]) < Number(value)));

//   case 'igual a':
//     return setListPlanets(listPlanets
//       .filter((planet) => Number(planet[column]) === Number(value)));

//   default:
//     return null;
//   }
// }
