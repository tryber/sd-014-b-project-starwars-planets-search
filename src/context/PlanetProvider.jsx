import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchingPlanets from '../services/planetAPI';

const INITIAL_STATE = {
  filterByName: {},
};

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);

  useEffect(() => {
    const takePlanets = async () => {
      const result = await fetchingPlanets();
      setData(result);
    };

    takePlanets();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
