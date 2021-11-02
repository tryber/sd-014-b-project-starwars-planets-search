import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlanetContext = createContext();

export default function PlanetProvider(props) {
  const { children } = props;
  const INITIAL_VALUE = 100000;
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(INITIAL_VALUE);

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

  const handleFiltering = () => {
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
        filters: {
          filterByName: {
            name,
            setName,
          },
          filterByNumericValues: [
            {
              column,
              setColumn,
              comparison,
              setComparison,
              value,
              setValue,
            },
          ],
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
