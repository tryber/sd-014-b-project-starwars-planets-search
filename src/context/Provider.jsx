import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../myHooks/useFetch';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [thePlanets] = useFetch(URL);
  const [planetsFilter, setPlanetsFilter] = useState([]);

  const context = {
    thePlanets,
    planetsFilter,
    setPlanetsFilter,
  };

  useEffect(() => {
    setPlanetsFilter(thePlanets);
  }, [thePlanets]);

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}
