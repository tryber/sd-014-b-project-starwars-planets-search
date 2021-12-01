import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import tableHeader from '../table/tableData';
import dataFilter from './dataFilter';
import './numericFilter.css';

// parte desse código foi inpirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/components/FilterNumeric.jsx

export default function NumericFilter() {
  const { setFilterByNumericValues, setFilterByOrder } = useContext(MyContext);

  const { dataNumeric, dataColumn, dataOrder, dataComparison } = dataFilter;

  const [numericValues, setNumericValues] = useState(dataNumeric);
  const [columns, setColumns] = useState(dataColumn);
  const [order, setOrder] = useState(dataOrder);

  const handleChange = ({ target: { name, value } }) => {
    setNumericValues({ ...numericValues, [name]: value });
  };

  const handleFilter = () => {
    setFilterByNumericValues(numericValues);
    const { column } = numericValues;
    const newColumns = columns.filter((newcolumn) => column !== newcolumn);
    setColumns(newColumns);
  };

  const handleOrder = ({ target: { name, value } }) => {
    setOrder({ ...order, [name]: value });
  };

  return (
    <>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ numericValues.column }
          onChange={ handleChange }
        >
          {columns.map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ numericValues.comparison }
          onChange={ handleChange }
        >
          {dataComparison.map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <label htmlFor="value">
          <input
            id="value"
            name="value"
            value={ numericValues.value }
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
      <form>
        <select
          data-testid="column-sort"
          name="column"
          value={ order.column }
          onChange={ handleOrder }
        >
          {tableHeader.map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <label htmlFor="up">
          <input
            onChange={ handleOrder }
            data-testid="column-sort-input-asc"
            id="up"
            name="sort"
            type="radio"
            value="ASC"
          />
          Ascendente
        </label>
        <label htmlFor="down">
          <input
            onChange={ handleOrder }
            name="sort"
            data-testid="column-sort-input-desc"
            id="down"
            type="radio"
            value="DESC"
          />
          Descendente
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => setFilterByOrder(order) }
        >
          Ordenar
        </button>
      </form>
    </>
  );
}
