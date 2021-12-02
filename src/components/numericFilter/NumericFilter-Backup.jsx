import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import tableHeader from '../table/tableData';
import './numericFilter.css';

// parte desse código foi inpirado no repositório do Michael Cachias https://github.com/tryber/sd-014-b-project-starwars-planets-search/blob/michaelcaxias-starwars-planets/src/components/FilterNumeric.jsx

export default function NumericFilter() {
  const {
    setFilterByNumericValues,
    filteredColumns,
    dataFilter,
    setFilterByOrder,
    filters: { order },
  } = useContext(MyContext);

  const [inputNumericValues, setInputNumericValues] = useState(dataFilter);
  const [dataOrder, setDataOrder] = useState(order);

  const handleChange = ({ target: { name, value } }) => {
    setInputNumericValues({ ...inputNumericValues, [name]: value });
  };

  const handleFilter = () => {
    // console.log(!filteredColumns[0]);
    if (!filteredColumns[0]) {
      alert('Delete um filtro');
      return null;
    }
    setFilterByNumericValues(inputNumericValues);
    console.log(filteredColumns);
    setInputNumericValues({ ...inputNumericValues, column: filteredColumns[1] });
  };

  const handleOrder = ({ target: { name, value } }) => {
    setDataOrder({ ...dataOrder, [name]: value });
  };

  const dataComparison = ['maior que', 'menor que', 'igual a'];
  return (
    <>
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ inputNumericValues.column }
          onChange={ handleChange }
        >
          {filteredColumns && filteredColumns
            .map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ inputNumericValues.comparison }
          onChange={ handleChange }
        >
          {dataComparison.map((opt, i) => <option key={ i }>{opt}</option>)}
        </select>
        <label htmlFor="value">
          <input
            id="value"
            name="value"
            value={ inputNumericValues.value }
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
          onClick={ () => setFilterByOrder(dataOrder) }
        >
          Ordenar
        </button>
      </form>
    </>
  );
}
