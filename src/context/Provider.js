import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services/StarWarsApi';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchState, setSearchState] = useState({
    filters: {
      filterByName: '',
    },
  });
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchPlanets().then(setPlanets);
  }, []);

  const contextValues = {
    planets,
    searchState,
    setSearchState,
    filtered,
    setFiltered,
  };

  return (
    <AppContext.Provider value={ contextValues }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
