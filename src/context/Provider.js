import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const value = {
    data, setData,
  };

  async function fetchData() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const result = await response.json();
    const planets = result.results;
    const planetsData = [];

    planets.map((planet) => {
      delete planet.residents;
      return planetsData.push(planet);
    });

    setData(planetsData);
    console.log(planetsData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={ value }>
      {children}
    </DataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
