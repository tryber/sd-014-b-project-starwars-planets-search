import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };
  const [API, setAPI] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((response) => setAPI(response.results));
  }, []);

  const context = {
    filters,
    API,
    setFilters,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
