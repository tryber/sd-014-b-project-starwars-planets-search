import React, { useContext, useState } from 'react';
import SearchContext from '../context/SearchContext';

function Search() {
  const { nameFilter,
    setNameFilter,
    typeFilter, setTypeFilter } = useContext(SearchContext);

  const [numberInput, setNumberInput] = useState(0);
  const [columnFilter, setColumnFilter] = useState('');
  const [comparison, setComparison] = useState('');

  const handleClick = () => {
    if (numberInput && columnFilter && comparison) {
      const filter = {
        numberInput: Number(numberInput),
        columnFilter,
        comparison,
      };
      setTypeFilter([...typeFilter, filter]);
      document.querySelector(`#${columnFilter}`).remove();
    } else {
      setTypeFilter([]);
    }
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
        <option value="population" id="population">population</option>
        <option value="orbital_period" id="orbital_period">orbital_period</option>
        <option value="diameter" id="diameter">diameter</option>
        <option value="rotation_period" id="rotation_period">rotation_period</option>
        <option value="surface_water" id="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => { setComparison(value); } }
      >
        <option value="menor que">menor que</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
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
