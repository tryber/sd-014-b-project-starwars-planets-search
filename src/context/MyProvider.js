import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { getPlanets } from '../services';

export default function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    (async () => setData(await getPlanets()))();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilters,
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
