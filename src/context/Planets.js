import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  planets: [],
};

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
};

const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState(INITIAL_STATE.planets);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const filterPlanetsByName = (name) => {
    if (planets && name !== '') {
      const filtered = planets.filter((planet) => planet.name.includes(name));
      setPlanets(filtered);
    } else {
      setPlanets(planets);
    }
  };

  const handleFilterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
    filterPlanetsByName(value);
  };

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
    handleFilterByName,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContext;
