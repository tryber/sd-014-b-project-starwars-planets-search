import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanetsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  const planetsData = async () => {
    const planets = await fetchPlanets();
    setData(planets);
  };

  useEffect(() => {
    planetsData();
  }, []);

  const contextValue = {
    data,
    planetsData,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

// ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/82/files
PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
