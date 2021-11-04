import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import requestApiPlanets from '../services/requestApiPlanets';

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [filterName, setFilterName] = useState();
  const [filterEnabled, setFilterEnabled] = useState(false);

  async function fetchRequestApiPlanets() {
    const resposta = await requestApiPlanets();
    const result = resposta.results;
    setData(result);
  }

  return (
    <DataContext.Provider
      value={
        {
          data,
          searchName,
          filterName,
          filterEnabled,
          setData,
          setFilterEnabled,
          setFilterName,
          setSearchName,
          fetchRequestApiPlanets }
      }
    >
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
