import PropTypes from 'prop-types';
import React, { useState } from 'react';
import planetsContext from './planetsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function Provider({ children }) {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch(URL);
    const resolve = await response.json();
    setData(resolve.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, [data]);

  const context = {
    data,
    setData,
  };

  return (
    <planetsContext.Provider value={ context }>
      { children }
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
