import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  const [availableFilters, setAvailableFilters] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [numericalFilters, setNumericalFilters] = useState([]);

  const [numericalFilter, setNumericalFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const contextValue = {
    data,
    setData,

    filters,
    setFilters,

    availableFilters,
    setAvailableFilters,

    numericalFilter,
    setNumericalFilter,

    numericalFilters,
    setNumericalFilters,
  };

  // useEffect abaixo para fazer a requisição a API
  useEffect(() => {
    fetchApi()
      .then((response) => setData(response));
  }, []);

  // useEffect(() => {
  //   set
  // })

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.isRequired,
};

export default StarWarsProvider;
