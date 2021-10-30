import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarContext from './Context';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const fetchApi = await fetch(URL);
    const data = await fetchApi.json();
    const result = data.results;
    setPlanets(result);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextValue = { planets };
  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
