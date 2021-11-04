import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContex';
import getPlanets from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]); // data é o retorno da API

  async function requestApi() {
    const results = await getPlanets();
    setPlanets(results);
  }

  const contextValue = {
    data,
    setPlanets,
    requestApi,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
