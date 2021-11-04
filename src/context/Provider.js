/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import fetchApi from '../services/serviceApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilters] = useState({
    filters: {
      filterByName: { name: '' },
      filterByNumericValues: [],
    } });
  const { filters: { filterByName: { name }, filterByNumericValues } } = filter;

  const getDataApi = async () => {
    setData(await fetchApi());
  };

  useEffect(() => {
    if (name !== '') {
      const dataFilter = data
        .filter((planet) => planet.name.toLowerCase()
          .includes(name.toLowerCase()));
      setData(dataFilter);
    } else {
      getDataApi();
    }
  }, [name]);

  const getPlanetName = (value) => {
    setFilters({ filters: { filterByName: { name: value } } });
  };

  const getFilterNumeric = (column, comparison, value) => {
    setFilters({ filters: { filterByName: { name },
      filterByNumericValues: [...filterByNumericValues,
        { column, comparison, value }] } });
    // setFilters(filterByNumericValues.concat({ column, comparison, value }));
  };

  const contextValue = {
    data,
    getDataApi,
    setData,
    filter,
    getPlanetName,
    getFilterNumeric,
  };

  return (
    <ContextPlanets.Provider value={ contextValue }>
      { children }
    </ContextPlanets.Provider>
  );
};

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;
