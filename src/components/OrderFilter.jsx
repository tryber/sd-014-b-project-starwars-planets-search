import React, { useContext, useEffect } from 'react';
import appContext from '../context/Context';

export default function OrderFilter() {
  const {
    dataFiltered,
    setDataFiltered,
    filter,
    setFilter,
    sort,
    setSort,
    column,
    setColumn,
  } = useContext(appContext);

  /*  function compare(a, b) {
      if (a[column] < b[column]) return '-1';
      if (a[column] > b[column]) return '1';
      return '0';
    }
  
    useEffect(() => {
      if (sort === 'ASC') {
        setDataFiltered(dataFiltered.sort(compare));
      } else {
        setDataFiltered(dataFiltered.sort(compare).reverse());
      }
    }, [filter, setDataFiltered, dataFiltered, sort]); */

  const handleClick = () => {
    setFilter({
      filters: {
        ...filter.filters,
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
        ],
        order: {
          column,
          sort,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="order">
        <select
          name="order"
          id="order"
          data-testid="column-sort"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="radio-asc">
        Ascendente
        <input
          type="radio"
          name="radio-order"
          id="radio-asc"
          value="ASC"
          checked={ sort === 'ASC' }
          data-testid="column-sort-input-asc"
          onChange={ (e) => { setSort(e.target.value); } }
        />
      </label>
      <label htmlFor="radio-desc">
        Descendente
        <input
          type="radio"
          name="radio-order"
          id="radio-desc"
          value="DESC"
          checked={ sort === 'DESC' }
          data-testid="column-sort-input-desc"
          onChange={ (e) => { setSort(e.target.value); } }
        />
      </label>
      <button
        name="Filtar"
        id="Filtar"
        type="button"
        data-testid="column-sort-button"
        onClick={ () => handleClick() }
      >
        Ordenar
      </button>
    </div>
  );
}
