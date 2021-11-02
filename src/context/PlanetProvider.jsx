import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';

export const PlanetContext = createContext();

export default function PlanetProvider(props) {
  const { children } = props;
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [name, setName] = useState('');

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

  return (
    <PlanetContext.Provider
      value={ {
        planets: filteredPlanets,
        filters: {
          filterByName: {
            name,
            setName,
          },
        },
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
