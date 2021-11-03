import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json());
    setPlanets(results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    planets,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
