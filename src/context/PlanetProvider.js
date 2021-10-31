import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets';

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(endpoint);
      const { results } = await data.json();
      results.forEach((result) => delete result.residents);
      setPlanets(results);
    }
    fetchData();
  }, []);

  return (
    <PlanetContext.Provider value={ planets }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetProvider;
