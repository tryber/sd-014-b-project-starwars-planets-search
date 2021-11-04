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

  const { setFilterByNumericValues, data,
    setDataFilter, setFilterOn, filterByNumericValues } = useContext(MyContext);

  const setFilterData = () => {
    let filtrado = [];

    if (comparisonFilter === 'igual a') {
      filtrado = data.filter((item) => (
        item[columnFilter] === valueFilter
      ));
    } if (comparisonFilter === 'maior que') {
      filtrado = data.filter((item) => (
        item[columnFilter] > Number(valueFilter)
      ));
      console.log(filtrado);
    } if (comparisonFilter === 'menor que') {
      filtrado = data.filter((item) => (
        item[columnFilter] < Number(valueFilter)
      ));
    }
    setDataFilter(filtrado);
  };

  const sendFilters = () => {
    setFilterByNumericValues([...filterByNumericValues, {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    }]);
    setFilterData();
    setFilterOn(true);
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
        <option value="diamenter">diameter</option>
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
