import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import requestApiPlanets from '../services/requestApiPlanets';

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  async function fetchRequestApiPlanets() {
    const resposta = await requestApiPlanets();
    setData(resposta.results);
  }

  return (
    <DataContext.Provider value={ { data, fetchRequestApiPlanets } }>
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
