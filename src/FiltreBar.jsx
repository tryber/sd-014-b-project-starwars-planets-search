import React, { useContext } from 'react';
import AppContext from './Context';

function FilterBar() {
  const { columnFilter,
    setColumnFilter,
    compairsonFilter,
    setComparisonFilter,
    value,
    setValue,
    setFiltred,
    data,
  } = useContext(AppContext);

  const handleClick = () => {
    const filtred = data.filter((planet) => {
      if (compairsonFilter === 'maior que') return Number(planet[columnFilter]) > Number(value);
      if (compairsonFilter === 'menor que') return Number(planet[columnFilter]) < Number(value);
      if (compairsonFilter === 'igual a') return Number(planet[columnFilter]) === Number(value);
      return null;
    });
    setFiltred(filtred);
  };

  return (
    <>
      <select onChange={ (event) => setColumnFilter(event.target.value) } data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select onChange={ (event) => setComparisonFilter(event.target.value) } data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input onChange={ (event) => setValue(event.target.value) } type="number" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterBar;
