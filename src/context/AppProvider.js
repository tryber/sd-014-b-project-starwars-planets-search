import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);

  async function fetchData() {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
    const response = await fetch(URL);
    const listPlanets = await response.json();
    setData(listPlanets.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const stateDefault = {
    data,
  };

  return (
    <AppContext.Provider value={ stateDefault }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
