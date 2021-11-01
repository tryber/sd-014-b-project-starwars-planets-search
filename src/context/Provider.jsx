import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const fetchPlanetsApi = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await fetch(PLANETS_URL).then((response) => response.json());
    setData(fetchPlanets.results);
  };

  function handleChangeByNameValues({ target }) {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    const newData = data.filter(
      ({ name }) => name.toLowerCase().startsWith(value.toLowerCase()),
    );
    setData(newData);
  }

  function handleChangeByNumericValues({ target }) {
    const { value, id } = target;
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues,
        [id]: value,
      },
    });
  }

  function handleChangeByOrderValues({ target }) {
    const { value, id } = target;
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        [id]: value,
      },
    });
  }
  function handleFilterByNumericValues() {
    console.log('handleFilterByNumericValues');
  }

  function handleByOrder() {
    console.log('handleByOrder');
  }

  const CONTEXT_DEFAULT = {
    data,
    fetchPlanetsApi,
    filters,
    handleChangeByNameValues,
    handleChangeByNumericValues,
    handleChangeByOrderValues,
    handleFilterByNumericValues,
    handleByOrder,
  };
  return (
    <PlanetsContext.Provider value={ CONTEXT_DEFAULT }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
