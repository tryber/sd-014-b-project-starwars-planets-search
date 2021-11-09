import React, { useContext, useState } from 'react';
import SearchContext from '../context/SearchContext';

function Search() {
  const { nameFilter,
    setNameFilter,
    setTypeFilter } = useContext(SearchContext);

  const [numberInput, setNumberInput] = useState(0);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparison, setComparison] = useState('bigger');

  const handleClick = () => {
    const filter = {
      numberInput: Number(numberInput),
      columnFilter,
      comparison,
    };
    setTypeFilter(filter);
  };

  return (
    <>
      <label htmlFor="name-filter">
        Filter by name:
        <input
          type="text"
          value={ nameFilter }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => {
            setNameFilter(value);
          } }
        />
      </label>
      <br />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => { setColumnFilter(value); } }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => { setComparison(value); } }
      >
        <option value="bigger">maior que</option>
        <option value="smaller">menor que</option>
        <option value="equals">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ numberInput }
        onChange={ ({ target: { value } }) => setNumberInput(value) }
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

export default Search;
