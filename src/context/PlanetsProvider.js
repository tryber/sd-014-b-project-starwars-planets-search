import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetList from '../services/FetchPlanetList';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });
  const [planetsUpdated, setPlanetsUpdated] = useState([]);

  async function getPlanets() {
    const planets = await fetchPlanetList();

    setData(planets);
    setPlanetsUpdated(planets);
    setIsLoading(false);
  }

  const context = {
    data,
    isLoading,
    getPlanets,
    filters,
    setFilters,
    setPlanetsUpdated,
    planetsUpdated,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
