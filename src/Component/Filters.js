import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

function FilterBar() {
  const {
    collumns,
    setCollumns,
    comparison,
    setComparison,
    value,
    setValue,
    setFiltered,
    data,
  } = useContext(planetContext);

  const handleClick = () => {
    const filtred = data.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[collumns]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[collumns]) < Number(value);
      }
      if (comparison === 'igual a') {
        return Number(planet[collumns]) === Number(value);
      }
      return null;
    });
    setFiltered(filtred);
    console.log(filtred);
  };

  return (
    <>
      <select
        onChange={ (event) => setCollumns(event.target.value) }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        onChange={ (event) => setComparison(event.target.value) }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        onChange={ (event) => setValue(event.target.value) }
        type="number"
        data-testid="value-filter"
      />

      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </>
  );
}
export default FilterBar;
