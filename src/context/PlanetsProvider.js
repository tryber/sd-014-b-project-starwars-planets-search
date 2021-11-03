import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import { fetchPlanets } from '../services/getApi';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const results = fetchPlanets();
    setData(results);
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>{children}</PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
};

PlanetsProvider.defaultProps = {
  children: PropTypes.any,
};
