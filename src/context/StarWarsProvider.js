import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/getAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function initialState() {
      const API = await getAPI();
      setData(API);
    }
    initialState();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarWarsProvider;
