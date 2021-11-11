import React, { useState, useEffect, useRef } from 'react';
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
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const originalData = useRef([]);

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

    filteredData,
    setFilteredData,

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
      .then((response) => {
        setData(response);
        setCurrentData(response);
        originalData.current = response;
      });
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;
    setFilteredData(currentData
      .filter((planet) => planet.name.toLowerCase()
        .includes(name.toLowerCase())));
  }, [currentData, filters]);

  useEffect(() => {
    setCurrentData(originalData.current);
    const comparisons = {
      'maior que': (col, val) => Number(col) > Number(val),
      'menor que': (col, val) => Number(col) < Number(val),
      'igual a': (col, val) => Number(col) === Number(val),
    };
    numericalFilters.forEach(({ column, comparison, value }) => {
      setCurrentData((prevCurrData) => prevCurrData
        .filter((planet) => comparisons[comparison](planet[column], value)));
    });
  }, [numericalFilters]);

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
