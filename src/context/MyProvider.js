import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchPlanetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  async function getPlanets() {
    const planets = await fetchPlanetsAPI();
    setData(planets);
  }

  const context = {
    data,
    getPlanets,
  };

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
