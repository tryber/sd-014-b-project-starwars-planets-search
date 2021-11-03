import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from '../context';

const planetsApi = async () => {
  const url = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsJson = await url.json();
  const result = planetsJson.results;
  setData(result);
  return result;
};

export default function ProviderAPI({ children }) {
  const [planets, setPlanets] = useState([]);

  const contextArray = {
    planets,
    setPlanets,
  };

  useEffect(() => {
    planetsApi();
  }, []);

  return (
    <planetsContext.Provider value={ contextArray }>
      { children }
    </planetsContext.Provider>
  );
}
ProviderAPI.propTypes = {
  children: PropTypes.node.isRequired,
};
