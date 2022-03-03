import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  });
  const [filterOptions, setFilterOptions] = useState({
    column: '',
    comparison: 'maior que',
    value: '0',
  });
  const [orderOption, setOrderOption] = useState({
    column: 'Name',
    sort: 'ASC',
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      const fetchAPI = fetch(URL);
      const response = await fetchAPI;
      const { results } = await response.json();
      setData(results);
    };
    fetchPlanets();
  }, []);

  const planetsContext = {
    data,
    filters,
    setFilters,
    filterOptions,
    setFilterOptions,
    orderOption,
    setOrderOption,
  };

  return (
    <PlanetsContext.Provider value={ planetsContext }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
