import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterNumeric() {
  const selectEquality = ['maior que', ' menor que', 'igual a'];
  const selectOrder = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  const {
    currentFilter,
    setCurrentFilter,
    setListPlanets,
    resetList,
    filters,
    arrayColumns,
    setArrayColumns,
    setFilters,
  } = useContext(MyContext);

  function handleChange({ target: { name, value } }) {
    setCurrentFilter({ ...currentFilter, [name]: value });
  }

  function handleChangeOrder({ target: { name, value } }) {
    const { order } = filters;
    setFilters({ ...order, [name]: value });
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

  const { filterByNumericValues } = filters;

  function handleClick() {
    console.log(filters);
    console.log(currentFilter);
    console.log(arrayColumns);
    handleFilterNumeric(currentFilter);
    filterByNumericValues.push(currentFilter);

    const filterColumn = arrayColumns.filter((item) => item !== currentFilter.column);

    setArrayColumns(filterColumn);
  }

  // function filterOrder({ column, sort }) {
  //   resetList.filter()
  // }

  function handleOrder() {

  }

  const { column, comparison, value } = currentFilter;
  const { order } = filters;

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
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
      <label htmlFor="column">
        Ordenar
        <select
          data-testid="column-sort"
          id="column"
          name="column"
          value={ order.column }
          onChange={ () => handleChangeOrder() }
        >
          {selectOrder
            .map((name, index) => <option key={ index }>{name}</option>)}
        </select>
      </label>
      <label htmlFor="asc">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          is="asc"
          type="radio"
          name="asc"
          value="ASC"
          onChange={ () => handleChangeOrder() }
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          id="desc"
          type="radio"
          name="desc"
          value="DESC"
          onChange={ () => handleChangeOrder() }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => handleOrder() }
      >
        Ordenar
      </button>
    </section>
  );
}

export default FilterNumeric;
