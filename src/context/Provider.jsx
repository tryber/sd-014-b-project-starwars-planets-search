import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({});
  const value = {
    data,
    setData,
    filters,
    setFilters,
    filteredData,
    setFilteredData,
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

    setData(dataPlanets); // Data Global imutável
    setFilteredData(dataPlanets); // Data a ser utilizado pelos filtros
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
