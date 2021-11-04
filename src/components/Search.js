import React, { useContext } from 'react';
import './table.css';
import DataContext from '../context/DataContext';

function Search() {
  const { searchName,
    setFilterEnabled,
    data, setData, setSearchName } = useContext(DataContext);

  function handleChange(event) {
    const nome = event.target.value;
    setSearchName(nome);
    setFilterEnabled(true);
    const filterPlanet = data.filter((planet) => (
      planet.name.toLowerCase().includes(nome.toLowerCase())
    ));
    setData(filterPlanet);
  }

  return (
    <div>
      <label htmlFor="filterName">
        <input
          id="filterName"
          placeholder="Filtrar por nome"
          data-testid="name-filter"
          name="filterName"
          value={ searchName }
          onChange={ (event) => { handleChange(event); } }
        />
      </label>
    </div>

  );
}

export default Search;
