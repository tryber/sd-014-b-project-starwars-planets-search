import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './Context';

const StarwarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';
    const request = await fetch(url);
    const resolve = await request.json();
    setData(resolve.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const state = { data };

  return (
    <StarwarsContext.Provider value={ state }>
      { children }
    </StarwarsContext.Provider>
  );
};

StarwarsProvider.propTypes = {
  // ref: https://stackoverflow.com/questions/50206801/what-is-the-difference-between-proptypes-node-and-proptypes-any-in-react/53246825
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
