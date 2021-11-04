import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        setData(error);
      }
    };
    fetchData();
  }, []);

  const [filterByName, setFilterByName] = useState('');

  const contextValue = {
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
