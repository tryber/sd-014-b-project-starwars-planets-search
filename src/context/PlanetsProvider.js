import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanet from '../services/fetchPlanets';

function PlanetsProvider(prop) {
  const [data, setPlanets] = useState([]);

  async function fetch() {
    const planetsReturn = await fetchPlanet();
    return planetsReturn;
  }

  return (
    <PlanetsContext.Provider value={ { data, setPlanets, fetch } }>
      { prop.children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
