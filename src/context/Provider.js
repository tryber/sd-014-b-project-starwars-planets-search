import React, { useState } from 'react';
import Proptypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import fetchApi from '../services/serviceApi';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const getDataApi = async () => {
    setData(await fetchApi());
  };

  const contextValue = {
    data,
    getDataApi,
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
