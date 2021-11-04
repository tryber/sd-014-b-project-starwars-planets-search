import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [click, setClick] = useState(false);
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

  const handleChangeName = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name: target.value,
        },
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      },
    });
  };

  const handleChangeColumn = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column: target.value,
            comparison,
            value,
          },
        ],
      },
    });
  };

  const handleChangeComparison = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column,
            comparison: target.value,
            value,
          },
        ],
      },
    });
  };

  const handleChangeValue = ({ target }) => {
    setPlanetName({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column,
            comparison,
            value: target.value,
          },
        ],
      },
    });
  };

  const searchPlanetByName = (arrayPlanets) => {
    const filteredPlanets = !click
      ? data.filter((planet) => planet.name.includes(name))
      : arrayPlanets.filter((planet) => planet.name.includes(name));

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

  const handleClick = () => {
    let arrayPlanets = [];

    if (column === 'population' && comparison === 'maior que') {
      arrayPlanets = data.map((planet) => planet.population > value);
    }

    setClick(true);

    searchPlanetByName(arrayPlanets);
  };

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
    }
    fetchData();
  }, []);

  return (
    <main>
      <PlanetsContext.Provider
        value={ { data,
          planetName,
          handleChangeName,
          handleChangeColumn,
          handleChangeComparison,
          handleChangeValue,
          searchPlanetByName,
          handleClick } }
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
