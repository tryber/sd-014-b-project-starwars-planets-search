import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import fetchApiPlanets from '../services/requestAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  async function requestApiPlanets() {
    const resp = await fetchApiPlanets();
    setData(resp.results);
  }

  return (
    <DataContext.Provider value={ { data, requestApiPlanets } }>
      { children }
    </DataContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
