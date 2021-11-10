import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../services/fetchAPI';

/** Ref: Consultei no repositório da Bea Ribeiro sobre a requisição API e useEffect */
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetName, setPlanetName] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);

  async function fetchingAPI() {
    const results = await fetchAPI();
    setPlanets(results);
  }

  useEffect(() => {
    fetchingAPI();
  }, []); // componentDidMount

  const contextValue = {
    planets,
    planetName,
    setPlanetName,
    fetchingAPI,
    typeFilter,
    setTypeFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
