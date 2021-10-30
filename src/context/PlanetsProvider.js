import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fetchPlanetsAPI from '../services/PlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({
    data: [],
  });

  const requestPlanets = async () => {
    const { results } = await fetchPlanetsAPI();
    console.log(results);
    setPlanets({ data: [...results] });
  };

  const context = {
    data: planets.data,
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
