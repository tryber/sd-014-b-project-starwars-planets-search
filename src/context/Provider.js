import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await request.json();
      setData(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const contextValue = {
    data,
    setData,
    loading,
    setLoading,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
    setFilterName,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.isRequired,
};

export default Provider;
