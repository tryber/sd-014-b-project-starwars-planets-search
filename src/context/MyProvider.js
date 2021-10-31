import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

export const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPlanets() {
    const requestPlanets = await (await fetch(URL)).json();
    const planets = requestPlanets.results.reduce((acc, cur) => {
      delete cur.residents;
      acc.push(cur);
      return acc;
    }, []);
    setData(planets);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { data, isLoading, fetchPlanets } }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
