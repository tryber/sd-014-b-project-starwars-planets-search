import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function FilterBar() {
  const { setQntFilter, setColumFilter, setDataFilter,
    dataFilter, columFilter, valueFilter, setValueFilter,
  } = useContext(MyContext);

  const filterClick = () => {
    const orderFilter = dataFilter.filter((val) => {
      if (columFilter === 'maior que') {
        return Number(val[columFilter]) > Number(valueFilter);
      }
      if (columFilter === 'menor que') {
        return Number(val[columFilter]) < Number(valueFilter);
      }
      if (columFilter === 'igual a') {
        return Number(val[columFilter]) === Number(valueFilter);
      }
      return null;
    });
    setDataFilter(orderFilter);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setQntFilter(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (event) => setColumFilter(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">maior que</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValueFilter(event.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterClick }
      >
        Filtrar
      </button>
    </div>
  );
}
