import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const selectState = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const selectComparisonState = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [initialOptions, setInitialOptions] = useState(selectState);
  const [selectOptions, setSelectOptions] = useState(selectState[0]);
  const [comparisonInitialOptions,
    setComparisonInitialOptions] = useState(selectComparisonState);
  const [comparisonOptions, setComparisonOptions] = useState(selectComparisonState[0]);
  const [value, setValue] = useState('');

  async function fetchData() {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
    const response = await fetch(URL);
    const listPlanets = await response.json();
    setData(listPlanets.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilters(data);
  }, [data]);

  const stateDefault = {
    data,
    filters,
    setFilters,
    initialOptions,
    setInitialOptions,
    selectOptions,
    setSelectOptions,
    comparisonInitialOptions,
    setComparisonInitialOptions,
    comparisonOptions,
    setComparisonOptions,
    value,
    setValue,
  };

  return (
    <AppContext.Provider value={ stateDefault }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
