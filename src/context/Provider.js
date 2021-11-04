import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import fetchApi from '../services/serviceApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    } });
  const { filters: { filterByName: { name } } } = filter;

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

  const contextValue = {
    data,
    getDataApi,
    filter,
    getPlanetName,
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
