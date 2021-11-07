import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });
  const { request, data } = useFetch();

  useEffect(() => {
    request('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
  }, [request]);

  useEffect(() => {
    if (data) {
      setPlanets(data.results);
    }
  }, [data]);

  const value = {
    planets,
    filter,
    setFilter,
  };

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStorage;
