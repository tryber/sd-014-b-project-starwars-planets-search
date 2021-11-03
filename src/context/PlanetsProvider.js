import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const PlanetsContext = createContext();

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [data, setData] = useState();
  function fetchPlanets() {
    fetch(PLANETS_URL)
      .then((response) => response.json())
      .then((result) => setData(result.results));
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      { children }
    </PlanetsContext.Provider>);
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
