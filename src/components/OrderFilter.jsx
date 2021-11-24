import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { FilterContext } from '../context/FilterContext';

const OrderFilter = ({ columns }) => {
  const [sort, setSort] = useState('ASC');
  const [name, setName] = useState('name');
  const {
    // filters: { order },
    setOrder,
  } = useContext(FilterContext);
  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();

        setOrder({ column: name, sort });
      } }
    >
      <select
        onChange={ (e) => setName(e.target.value) }
        value={ name }
        data-testid="column-sort"
      >
        {columns.map((column) => (
          <option key={ column } value={ column }>
            {column}
          </option>
        ))}
      </select>

      <label htmlFor="asc">
        <input
          data-testid="column-sort-input-asc"
          onChange={ (e) => setSort(e.target.value) }
          type="radio"
          name="order"
          id="asc"
          checked={ sort === 'ASC' }
          value="ASC"
        />
        Ascendent
      </label>

      <label htmlFor="desc">
        <input
          data-testid="column-sort-input-desc"
          onChange={ (e) => setSort(e.target.value) }
          type="radio"
          name="order"
          id="desc"
          checked={ sort === 'DESC' }
          value="DESC"
        />
        Descendent
      </label>
      <button data-testid="column-sort-button" type="submit">
        Ordenar
      </button>
    </form>
  );
};

OrderFilter.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderFilter;
