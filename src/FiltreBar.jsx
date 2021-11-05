import React, { useContext } from 'react';
import AppContext from './Context';

function FilterBar() {
  const { columnFilter,
    setColumnFilter,
    column,
    setColumn,
    comparisonFilter,
    setComparisonFilter,
    value,
    setValue,
    setFiltred,
    data,
  } = useContext(AppContext);

  const handleClick = () => {
    const filtred = data.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return Number(planet[columnFilter]) > Number(value);
      }
      if (comparisonFilter === 'menor que') {
        return Number(planet[columnFilter]) < Number(value);
      }
      if (comparisonFilter === 'igual a') {
        return Number(planet[columnFilter]) === Number(value);
      }
      return null;
    });
    const newColumn = column.filter((option) => (option !== columnFilter));
    setFiltred(filtred);
    setColumn(newColumn);
  };

  return (
    <>
      <select
        onChange={ (event) => setColumnFilter(event.target.value) }
        data-testid="column-filter"
      >
        {column.map((element) => (
          <option key={ element }>{element}</option>
        ))}
      </select>
      <select
        onChange={ (event) => setComparisonFilter(event.target.value) }
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
