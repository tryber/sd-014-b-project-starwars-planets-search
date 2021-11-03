import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api/starWarsPlanets';

export const PlanetFinderContext = createContext();

export default function PlanetFinderProvider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(initialPlanets);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setInitialPlanets(response.results);
      setFilteredPlanets(response.results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(
      initialPlanets.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        const filter = name.toLowerCase();
        return planetName.includes(filter);
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const value = {
    planets: filteredPlanets,
    filters: { filterByName: { name }, filterByNumericValues },
    setters: { setName, setFilterByNumericValues },
  };

  return (
    <PlanetFinderContext.Provider value={ value }>
      {children}
    </PlanetFinderContext.Provider>
  );
}

PlanetFinderProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
