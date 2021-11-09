import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/getAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchByNumerics, setSearchByNumerics] = useState(false);
  const [inputSearch, setInputSearch] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  });

  useEffect(() => {
    async function initialState() {
      const API = await getAPI();
      setData(API);
    }
    initialState();
  }, []);

  const stateObject = {
    data, inputSearch, setInputSearch, searchByNumerics, setSearchByNumerics,
  };

  return (
    <StarWarsContext.Provider value={ stateObject }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default StarWarsProvider;
