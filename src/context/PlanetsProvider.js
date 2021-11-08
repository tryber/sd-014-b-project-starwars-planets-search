import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [planetName, setPlanetName] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: 100000,
        },
      ],
    },
  });

  const {
    filters: {
      filterByName: { name },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
  } = planetName;

  const searchPlanetByName = (arrayPlanets) => {
    const filteredPlanets = arrayPlanets.length === 0 && comparison !== 'igual a'
      ? data.filter((planet) => planet.name.includes(name))
      : arrayPlanets;

    return filteredPlanets.map((planet, index) => (
      <tr key={ index }>
        <td key={ planet.name }>{ planet.name }</td>
        <td key={ planet.rotation_period }>{ planet.rotation_period }</td>
        <td key={ planet.orbital_period }>{ planet.orbital_period }</td>
        <td key={ planet.diameter }>{ planet.diameter }</td>
        <td key={ planet.climate }>{ planet.climate }</td>
        <td key={ planet.gravity }>{ planet.gravity }</td>
        <td key={ planet.terrain }>{ planet.terrain }</td>
        <td key={ planet.surface_water }>{ planet.surface_water }</td>
        <td key={ planet.population }>{ planet.population }</td>
        <td key={ planet.films }>{ planet.films }</td>
        <td key={ planet.created }>{ planet.created }</td>
        <td key={ planet.edited }>{ planet.edited }</td>
        <td key={ planet.url }>{ planet.url }</td>
      </tr>
    ));
  };

  const populationResults = () => {
    let arrayPlanets = [];
    if (column === 'population' && comparison === 'maior que') {
      arrayPlanets = data.filter((planet) => +planet.population > value);
    }
    if (column === 'population' && comparison === 'menor que') {
      arrayPlanets = data.filter((planet) => +planet.population < value);
    }
    if (column === 'population' && comparison === 'igual a') {
      arrayPlanets = data.filter((planet) => planet.population === value);
    }
    return arrayPlanets;
  };

  const orbitalResults = () => {
    let arrayPlanets = [];
    if (column === 'orbital_period' && comparison === 'maior que') {
      arrayPlanets = data.filter((planet) => +planet.orbital_period > value);
    }
    if (column === 'orbital_period' && comparison === 'menor que') {
      arrayPlanets = data.filter((planet) => +planet.orbital_period < value);
    }
    if (column === 'orbital_period' && comparison === 'igual a') {
      arrayPlanets = data.filter((planet) => planet.orbital_period === value);
    }
    return arrayPlanets;
  };

  const diameterResults = () => {
    let arrayPlanets = [];
    if (column === 'diameter' && comparison === 'maior que') {
      arrayPlanets = data.filter((planet) => +planet.diameter > value);
    }
    if (column === 'diameter' && comparison === 'menor que') {
      arrayPlanets = data.filter((planet) => +planet.diameter < value);
    }
    if (column === 'diameter' && comparison === 'igual a') {
      arrayPlanets = data.filter((planet) => planet.diameter === value);
    }
    return arrayPlanets;
  };

  const rotationResults = () => {
    let arrayPlanets = [];
    if (column === 'rotation_period' && comparison === 'maior que') {
      arrayPlanets = data.filter((planet) => +planet.rotation_period > value);
    }
    if (column === 'rotation_period' && comparison === 'menor que') {
      arrayPlanets = data.filter((planet) => +planet.rotation_period < value);
    }
    if (column === 'rotation_period' && comparison === 'igual a') {
      arrayPlanets = data.filter((planet) => planet.rotation_period === value);
    }
    return arrayPlanets;
  };

  const surfaceResults = () => {
    let arrayPlanets = [];
    if (column === 'surface_water' && comparison === 'maior que') {
      arrayPlanets = data.filter((planet) => +planet.surface_water > value);
    }
    if (column === 'surface_water' && comparison === 'menor que') {
      arrayPlanets = data.filter((planet) => +planet.surface_water < value);
    }
    if (column === 'surface_water' && comparison === 'igual a') {
      arrayPlanets = data.filter((planet) => planet.surface_water === value);
    }
    return arrayPlanets;
  };

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      setData(results);
    }
    fetchData();
  }, []);

  return (
    <main>
      <PlanetsContext.Provider
        value={ { data,
          planetName,
          setPlanetName,
          searchPlanetByName,
          setFilteredData,
          filteredData,
          populationResults,
          orbitalResults,
          diameterResults,
          rotationResults,
          surfaceResults } }
      >
        {children}
      </PlanetsContext.Provider>
    </main>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetsProvider;
