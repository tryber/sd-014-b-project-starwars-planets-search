import React, { useContext, useState } from 'react';
import planetContext from '../context/planetContext';

// Consultei esse código em: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/3/files

function OrderColumns() {
  const { handleOrderColumns } = useContext(planetContext);
  const initialOrder = { column: 'name', sort: 'asc' };
  const [order, setOrder] = useState(initialOrder);

  const handleChange = ({ target }) => {
    setOrder({
      ...order,
      [target.name]: target.value,
    });
  };

  const submitOrder = () => {
    handleOrderColumns(order);
  };

  return (
    <section>
      <select data-testid="column-sort" name="column" onChange={ handleChange }>
        <option value="name">name</option>
        <option value="rotation_period">rotation_period</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
        <option value="population">population</option>
      </select>
      <label htmlFor="asc">
        <input
          type="radio"
          id="asc"
          value="ASC"
          name="sort"
          onChange={ handleChange }
          data-testid="column-sort-input-asc"
        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          type="radio"
          id="desc"
          value="DESC"
          name="sort"
          onChange={ handleChange }
          data-testid="column-sort-input-desc"
        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ submitOrder }
      >
        Ordenar
      </button>
    </section>
  );
}

export default OrderColumns;
