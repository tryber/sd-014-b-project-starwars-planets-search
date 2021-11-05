import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanetsApi';

function PlanetsProvider({ children }) {
  const [ data, setData ] = useState([]);
  const [user, setUser] = useState('Icaro');

  const planetsData = async() => {
    const planets = await fetchPlanets();
    setData(planets);
  };
  
  useEffect(() => {
    planetsData();
  }, []);
  
  const contextValue = {
    data,
    planetsData,
    user,
  }
  
  // const returnPlanets = data.map((planet) => planet.name)
  // console.log(returnPlanets);

  return(
    <PlanetsContext.Provider value={contextValue}>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
