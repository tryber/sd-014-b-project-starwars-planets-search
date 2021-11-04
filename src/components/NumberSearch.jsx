import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';

export default function NumberSearch() {
  const [columnFilter, setColumnFilter] = useState('diameter');
  const handleChangeColumnFilter = ({ target: { value } }) => {
    setColumnFilter(value);
  };

  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const handleChangeComparisonFilter = ({ target: { value } }) => {
    setComparisonFilter(value);
  };

  const [valueFilter, setValueFilter] = useState(0);
  const handleChangeValueFilter = ({ target: { value } }) => {
    setValueFilter(value);
  };

  const { setFilterByNumericValues, data, setDataFilter } = useContext(MyContext);

  const setFilterData = () => {
    let filtrado = [];
    if (comparisonFilter === 'igual a') {
      filtrado = data.filter((item) => (
        item[columnFilter] === valueFilter
      ));
      setDataFilter(filtrado);
    } if (comparisonFilter === 'maior que') {
      filtrado = data.filter((item) => (
        item[columnFilter] > valueFilter
      ));
      setDataFilter(filtrado);
    } if (comparisonFilter === 'menor que') {
      filtrado = data.filter((item) => (
        item[columnFilter] < valueFilter
      ));
      setDataFilter(filtrado);
      console.log('filtrado', filtrado);
    }
  };

  const sendFilters = () => {
    setFilterByNumericValues({
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    });
    setFilterData();
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column_filter"
        id="column-filter"
        value={ columnFilter }
        onChange={ handleChangeColumnFilter }
      >
        <option selected value="diameter">diameter</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        value={ comparisonFilter }
        onChange={ handleChangeComparisonFilter }
      >
        <option selected value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="numberCoparar"
        id="numberCoparar"
        placeholder="digite só números"
        value={ valueFilter }
        onChange={ handleChangeValueFilter }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ sendFilters }
      >
        Add Filtro
      </button>
    </form>
  );
}
