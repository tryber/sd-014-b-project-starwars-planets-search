import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterOrder() {
  const selectOrder = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'climate',
    'gravity',
    'terrain',
    'films',
    'created',
    'edited',
    'url',
  ];

  const {
    listPlanets,
    setListPlanets,
    setFilters,
    filters,
  } = useContext(MyContext);

  const { order } = filters;
  const { column, sort } = order;
  const num1 = -1;

  function handleChangeOrder({ target: { name, value } }) {
    setFilters({ ...filters, order: { ...order, [name]: value } });
  }

  function filterOrder() {
    if (sort === 'ASC') {
      const sorted = [...listPlanets].sort((a, b) => (
        Number(a[column].toLowerCase()) > Number(b[column].toLowerCase()) ? 1 : num1));
      return setListPlanets(sorted);
    }
    if (sort === 'DESC') {
      const sorted = [...listPlanets].sort((a, b) => (
        Number(a[column].toLowerCase()) < Number(b[column].toLowerCase()) ? 1 : num1));
      return setListPlanets(sorted);
    }
  }

  function handleOrder() {
    filterOrder();
  }

  return (
    <section>
      <label htmlFor="column">
        Ordenar por:
        <select
          data-testid="column-sort"
          name="column"
          value={ column }
          onChange={ handleChangeOrder }
        >
          {selectOrder
            .map((orderName, index) => <option key={ index }>{orderName}</option>)}
        </select>
      </label>
      <label htmlFor="asc-input">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          is="asc-input"
          type="radio"
          name="sort"
          value="ASC"
          onChange={ handleChangeOrder }
        />
      </label>
      <label htmlFor="desc-input">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          id="desc-input"
          type="radio"
          name="sort"
          value="DESC"
          onChange={ handleChangeOrder }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ handleOrder }
      >
        Ordenar
      </button>
    </section>
  );
}

export default FilterOrder;
