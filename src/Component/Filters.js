import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

function FilterBar() {
  const {
    columns,
    setCollumns,
    comparison,
    setComparison,
    value,
    setValue,
    setFiltred,
    data,
  } = useContext(planetContext);

  const handleClick = () => {
    const filtred = data.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[columns]) > Number(value);
      }
      if (comparison === 'menor que') {
        return Number(planet[columns]) < Number(value);
      }
      if (compairson === 'igual a') {
        return Number(planet[columns]) === Number(value);
      }
      return null;
    });
    setFiltred(filtred);
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
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        onChange={ (event) => setValue(event.target.value) }
        type="number"
        data-testid="value-filter"
      />

      <button type="button" onClick={ handleClick } data-testid="button-filter">
        Filtrar
      </button>
    </>
  );
}
export default FilterBar;
