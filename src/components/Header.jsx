import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

const filterValues = [
  'population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water',
];

function Header() {
  const { setData, data, setLoading, filters: { filterByName },
    setFilterByNumericValues, value, column, comparison, setName,
    setFiltered, setValue, setColumn, setComparison } = useContext(PlanetContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planets = await result.json();
      setData(planets.results);
      setFiltered(planets.results);
      setLoading(false);
    };
    fetchPlanets();
  }, [setData, setFiltered, setLoading]);

  useEffect(() => {
    const filtered = data.filter(({ name }) => (
      name.toLowerCase().includes(filterByName.name.toLowerCase())
    ));
    setFiltered(filtered);
  }, [filterByName.name, setFiltered, data]);

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
        {filterValues.map((columnName, index) => (
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
        onClick={ () => setFilterByNumericValues({ value, column, comparison }) }
      >
        Filtrar
      </button>
    </header>
  );
}

export default Header;
