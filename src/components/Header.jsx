import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../context/Provider';
import fetchPlanets from '../api/StarWars';

function Header() {
  const {
    filters,
    setFilters,
    data,
    setData,
    setIsLoading,
    setPlanets,
    options,
    setOptions,
  } = useContext(Context);

  const [columnState, setColumnState] = useState('population');
  const [comparisonState, setComparisonState] = useState('maior que');
  const [valueState, setValueState] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      setIsLoading(true);
      const planets = await fetchPlanets();
      setIsLoading(false);
      setPlanets(planets);
      setData(planets);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column, value, comparison }) => {
      const filteredPlanets = data.filter((planet) => {
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') {
          return Number(planet[column]) === Number(value);
        }
        return planet;
      });
      setPlanets(filteredPlanets);
    });
  }, [filters]);

  const handleInput = async ({ target }) => {
    const searchedPlanet = target.value.toLowerCase();
    const filteredPlanets = data.filter((planet) => (
      planet.name.toLowerCase().includes(searchedPlanet)
    ));
    setPlanets(filteredPlanets);
    setFilters({ ...filters, filterByName: { name: searchedPlanet } });
  };

  const handleNumericFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column: columnState,
        comparison: comparisonState,
        value: valueState,
      }],
    });
    const newOptions = options.filter((option) => option !== columnState);
    setOptions(newOptions);
  };

  return (
    <div>
      <h1>Star Wars Planet Search</h1>
      <div>
        <input
          data-testid="name-filter"
          onChange={ handleInput }
          type="text"
          placeholder="filtar por nome"
        />
        <select
          onChange={ ({ target }) => setColumnState(target.value) }
          data-testid="column-filter"
          name="column"
          value={ columnState }
        >
          { options.map((option) => (
            <option key={ option } value={ option }>
              { option }
            </option>
          )) }
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ ({ target }) => setComparisonState(target.value) }
          value={ comparisonState }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          value={ valueState }
          onChange={ ({ target }) => setValueState(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilters }
        >
          Filtrar

        </button>
      </div>
    </div>
  );
}

export default Header;
