import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApiPlanets from '../services/servicesAPI';
import MyContext from './MyContext';

function FetchProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApiPlanets();
      setData(result);
    })();
  }, []);

  const [filters, setFilters] = useState({ filters: { filtersByName: { name: '' } } });
  const { filters: { filtersByName: { name } } } = filters;

  const setFiltersByName = (params) => {
    const newFilters = { ...filters, filters: { filtersByName: { name: params } } };
    setFilters(newFilters);
  };

  return (
    <MyContext.Provider value={ { data, setFiltersByName, name } }>
      { children }
    </MyContext.Provider>
  );
}

FetchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FetchProvider;
