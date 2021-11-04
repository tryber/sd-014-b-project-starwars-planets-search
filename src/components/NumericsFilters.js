import React, { useContext, useState, useEffect } from 'react';
import PlannetsContext from '../context/PlannetsContext';

export default function NumericsFilters() {
  const { setColumn, setComparison,
    setFilterValue, filterDataByNumericValues } = useContext(PlannetsContext);

  const [comparison, setStateComparison] = useState('maior que');

  useEffect(() => {
    setComparison(comparison);
  }, [comparison, setComparison]);

  return (
    <form>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="rotation_period">rotation_period</option>
        <option value="diameter">diameter</option>
        <option value="surface_water">surface_water</option>
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
          onChange={ ({ target }) => setFilterValue(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterDataByNumericValues }
      >
        Filtrar
      </button>
    </form>
  );
}
