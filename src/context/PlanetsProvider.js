import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanet from '../services/fetchPlanets';

function PlanetsProvider(prop) {
  const [data, setPlanets] = useState([]);

  async function fetch() {
    const planetsReturn = await fetchPlanet();
    setPlanets(planetsReturn);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { prop.children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
