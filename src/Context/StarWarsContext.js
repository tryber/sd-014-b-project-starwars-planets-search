import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../services/fetchAPI';

const PlanetsContext = createContext();

export const PlanetsData = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: '',
  });

  useEffect(() => {
    const search = async () => {
      const { results } = await planetsAPI();
      setData(results);
    };
    search();
  }, []);

  const dataValue = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ dataValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsData.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContext;
