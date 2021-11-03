import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const value = {
    data,
    setData,
  };

  async function fetchAPI() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await response.json();
    const planets = json.results;
    const dataPlanets = [];

    planets.map((planet) => {
      delete planet.residents;
      return dataPlanets.push(planet);
    });

    setData(dataPlanets);
    console.log('Montou');
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
