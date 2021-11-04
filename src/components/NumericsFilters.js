import React, { useContext, useState, useEffect } from 'react';
import PlannetsContext from '../context/PlannetsContext';

export default function NumericsFilters() {
  const { setColumn, setComparison,
    setFilterValue, filterDataByNumericValues,
    setFilterParams, filterParams } = useContext(PlannetsContext);

  const [comparison, setStateComparison] = useState('maior que');
  const [columnActualValue, setColumnActualValue] = useState('population');
  const [valueComparason, setValueComparason] = useState(0);
  const [column, setFilterColumn] = useState(['population', 'orbital_period',
    'rotation_period', 'diameter', 'surface_water']);

  useEffect(() => {
    setComparison(comparison);
  }, [comparison, setComparison]);

  function removeColumnValue() {
    const index = column.indexOf(columnActualValue);
    column.splice(index, 1);
    setFilterColumn(column);
    filterDataByNumericValues();
    setFilterParams([...filterParams,
      { columnActualValue, comparison, valueComparason }]);
  }

  function atualizeColumnValue(target) {
    const { value } = target;
    setColumnActualValue(value);
    setColumn(value);
  }

  function setValueFilter(target) {
    const { value } = target;
    setFilterValue(value);
    setValueComparason(value);
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => atualizeColumnValue(target) }
      >
        {column.map((value) => <option key={ value } value={ value }>{value}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setStateComparison(target.value) }
        defaultValue={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target }) => setValueFilter(target) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => removeColumnValue() }
      >
        Filtrar
      </button>
    </form>
  );
}
