import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// import { Container } from './styles';

function ColumnFilter() {
  const {
    data,
    setData,
    tableIndexes,
    filters,
    setFilters,
    columnValue,
    comparisonValue,
    valueFilter,
  } = useContext(StarWarsContext);

  const [radioValue, setRadioValue] = useState('');
  const [selectValue, setSelectValue] = useState('Name');

  const orderFunction = () => {
    console.log(selectValue);
    switch (radioValue) {
    case 'DESC':
      console.log('descendente');
      setData(data
        .sort((a, b) => a[`${selectValue.toLowerCase()}`] - b[`${selectValue}`]));
      break;
    default:
      console.log(`'ascendente'${selectValue.toLowerCase()}`);
      setData(data
        .sort((a, b) => a[`${selectValue.toLowerCase()}`] + b[`${selectValue}`]));
      break;
    }
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
      ],
      order: {
        column: selectValue,
        sort: radioValue,
      },
    });
    console.log(filters);
  };

  return (
    <>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setSelectValue(value) }
      >
        {tableIndexes.map((eachIndex, id) => (
          <option key={ id } value={ eachIndex }>{eachIndex}</option>))}
      </select>
      <label htmlFor="order-radio-btn">
        <input
          name="order-radio-btn"
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          id="asc-radio"
          onChange={ ({ target: { value } }) => setRadioValue(value) }
        />
        Ascendente
        <input
          name="order-radio-btn"
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          id="desc-radio"
          onChange={ ({ target: { value } }) => setRadioValue(value) }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderFunction() }
      >
        Ordenar
      </button>
    </>
  );
}

export default ColumnFilter;
