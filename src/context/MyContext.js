import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsApi from '../components/planets';

export const PlanetsSearchContext = createContext();

export default function PlanetsSearchProvider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [filteredPlantes, setFilteredPlanets] = useState(initialPlanets);
  const [name, setName] = useState('');

  useEffect(() => {
    const planets = async () => {
      const result = await planetsApi();
      setInitialPlanets(result.results);
      setFilteredPlanets(result.results);
    };
    planets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(
      initialPlanets.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        const filtered = name.toLowerCase();
        return planetName.includes(filtered);
      }),
    );
  }, [initialPlanets, name]);

  const value = {
    planets: filteredPlantes,
    filters: { filterByName: { name } },
    setters: { setName },
  };

  return (
    <PlanetsSearchContext.Provider value={ value }>
      {children}
    </PlanetsSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
