import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getAPI from '../services/getAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [inputName, setInputName] = useState(false);
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
      setInitialData(API);
    }
    initialState();
  }, []);

  const stateObject = {
    data,
    setData,
    inputSearch,
    setInputSearch,
    searchByNumerics,
    setSearchByNumerics,
    initialData,
    inputName,
    setInputName,
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
