import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const {
    setData, setLoading, setFilterByNumericValues, value,
    column, comparison, setName, setFiltered, setValue, setColumn,
    setComparison, filterColumn, setFilterColumn, optionColumn,
  } = useContext(PlanetContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planets = await result.json();
      setData(planets.results);
      setLoading(false);
    };
    fetchPlanets();
  }, [setData, setFiltered, setLoading]);

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        placeholder="Filtrar por nome"
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {filterColumn.map((columnName, index) => (
          <option value={ columnName } key={ index }>{ columnName }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilterByNumericValues({ value, column, comparison });
          setFilterColumn(optionColumn.filter((columnOption) => columnOption !== column));
        } }
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
