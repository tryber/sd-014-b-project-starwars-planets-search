import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
    setData,
  };

  async function fecthPlanets() {
    const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await planets.json();
    setData(results);
    console.log('state do context', results);
  }

  useEffect(() => {
    fecthPlanets();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
