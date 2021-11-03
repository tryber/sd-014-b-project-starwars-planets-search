import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/starWarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function getPlanets() {
    setIsFetching(true);
    const planets = await starWarsAPI();
    setData(planets.results);
    setIsFetching(false);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { data, isFetching } }
    >
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
