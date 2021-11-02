import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlanetContext = createContext();

export default function PlanetProvider(props) {
  const { children } = props;

  const COLUMNS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filteredColumns, setFilteredColumns] = useState(COLUMNS);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setPlanets(response.results);
      setFilteredPlanets(response.results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const planetsByName = planets.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      const filter = name.toLowerCase();
      return planetName.includes(filter);
    });
    setFilteredPlanets(planetsByName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const handleFiltering = (column, comparison, value) => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, value },
    ]);

    setFilteredColumns(filteredColumns.filter((element) => element !== column));

    switch (comparison) {
    case 'maior que':
      setFilteredPlanets(
        planets.filter((planet) => parseInt(planet[column], 10) > value),
      );
      break;
    case 'menor que':
      setFilteredPlanets(
        planets.filter((planet) => parseInt(planet[column], 10) < value),
      );
      break;
    case 'igual a':
      setFilteredPlanets(
        planets.filter((planet) => planet[column] === value),
      );
      break;
    default:
      break;
    }
  };

  return (
    <PlanetContext.Provider
      value={ {
        planets: filteredPlanets,
        columns: filteredColumns,
        filters: {
          filterByName: {
            name,
            setName,
          },
          filterByNumericValues,
        },
        handleFiltering,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
