import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fetcPlanetshAPI from '../services/requestPlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  async function requestPlanets() {
    setIsLoading(true);
    const { results } = await fetcPlanetshAPI();
    results.map((planet) => delete planet.residents);
    setData(results);
    setIsLoading(false);
  }

  const context = {
    data,
    setData,
    isLoading,
    setIsLoading,
    filters,
    setFilters,
    requestPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
