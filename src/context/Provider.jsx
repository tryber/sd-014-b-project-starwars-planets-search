import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanetsApi = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await fetch(PLANETS_URL).then((response) => response.json());
    setData(fetchPlanets.results);
  };

  const CONTEXT_DEFAULT = { data, fetchPlanetsApi };
  return (
    <PlanetsContext.Provider value={ CONTEXT_DEFAULT }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
