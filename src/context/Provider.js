import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const { results } = await fetch('https://swapi.dev/api/planets')
      .then((response) => response.json());
    setData(results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
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
