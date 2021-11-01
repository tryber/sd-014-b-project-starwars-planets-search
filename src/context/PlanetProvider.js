import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function PlanetAPI() {
    const urlFetch = await fetch(URL);
    const response = await urlFetch.json();
    const { results } = response;
    const resultApi = results.filter((result) => delete result.residents);
    setData(resultApi);
  }

  useEffect(() => {
    PlanetAPI();
  }, []);

  return (
    <PlanetContext.Provider value={ { data } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
