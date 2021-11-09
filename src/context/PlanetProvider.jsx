import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchingPlanets from '../services/planetAPI';

const INITIAL_STATE = {
  filterByName: '',
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_STATE);

  useEffect(() => {
    const takePlanets = async () => {
      const result = await fetchingPlanets();
      const num = -1;
      setData(result.sort((a, b) => (a.name > b.name ? 1 : num)));
    };

    takePlanets();
  }, []);

  const contextValue = {
    data,
    setData,
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
