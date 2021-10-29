import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

const StarwarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(true);

  const getStarwarsPlanet = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    try {
      const request = await fetch(url);
      const resolve = await request.json();
      setData(resolve.results);
      return setFetching(false);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getStarwarsPlanet();
  }, []);

  const state = {
    data,
    isFetching,
  };

  return (
    <StarwarsContext.Provider value={ state }>
      { children }
    </StarwarsContext.Provider>
  );
};

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
