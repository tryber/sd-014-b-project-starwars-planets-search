import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './Context';
import fetchPlanets from '../services/fecthApi';

function Provider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    const planetsList = await fetchPlanets();
    setData(planetsList.results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    handleFetch();
  }, []);

  const contextValue = {
    loading,
    data,
  };

  return (
    <myContext.Provider value={ contextValue }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
