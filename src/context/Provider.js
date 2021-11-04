import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    /* const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/'; */
    const URL_API = 'https://swapi.dev/api/planets/';
    const fetchData = async () => {
      try {
        const results = await fetch(URL_API);
        const json = await results.json();
        setData(json.results);
        setLoading(false);
      } catch (error) {
        setData(error);
      }
    };
    fetchData();
  }, []);

  const [filterByName, setFilterByName] = useState('');

  const contextValue = {
    loading,
    setLoading,
    data,
    setData,
    filters: {
      filterByName,
      setFilterByName,
    },
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
