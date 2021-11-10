import React, { useContext } from 'react';
import planetContext from '../Context/planetContext';

function FilterBar() {
  const {
    columnFilter,
    setColumnFilter,
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
    const newColumn = columnFilter((option) => (option !== columnFilter));
    setFiltered(filtred);
    setCollumns(newColumn);
  };

  return (
    <>
      <select
        onChange={ (event) => setColumnFilter(event.target.value) }
        data-testid="column-filter"
      >
        {collumns.map((element) => (
          <option key={ element }>{element}</option>
        ))}
      </select>
      <select
        onChange={ (event) => setComparison(event.target.value) }
        data-testid="comparison-filter"
      >
        <option key="maior que">maior que</option>
        <option key="menor que">menor que</option>
        <option key="igual a">igual a</option>
      </select>
      <input
        onChange={ (event) => setValue(event.target.value) }
        value={ value }
        type="number"
        data-testid="value-filter"
      />
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
