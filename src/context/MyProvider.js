import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [arrayFilters, setArrayFilters] = useState([]);

  useEffect(() => {
    (async () => setData(await getPlanets()))();
  }, []);

  const contextValue = {
    data,
    arrayFilters,
    setArrayFilters,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
