import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  const fetchStarWars = () => {
    try {
      fetch('https://swapi-trybe.herokuapp.com/api/planets')
        .then((req) => req.json())
        .then((res) => setData(res.results));
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    if (fetching) {
      fetchStarWars();
      setFetching(false);
    } else {
      return undefined;
    }
  }, [fetching]);

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
