import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchPlanetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  async function getPlanets() {
    const planets = await fetchPlanetsAPI();
    setData(planets);
    setPlanetsList(planets);
  }

  const context = {
    data,
    getPlanets,
    filters,
    setFilters,
    planetsList,
    setPlanetsList,
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
