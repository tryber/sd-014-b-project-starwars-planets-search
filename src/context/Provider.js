import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextSWP from './ContextSWP';

const ApiState = {
  data: {},
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  },
};

function Provider({ children }) {
  const [state, setState] = useState();

  const setFilterByName = ({ target: { value } }) => {
    setState({ ...state, filters: { ...state.filters, filterByName: { name: value } } });
  };

  const setFilterNumericValues = (param) => {
    setState({ ...state,
      filters: { ...state.filters,
        filterByNumericValues: [
          ...state.filters.filterByNumericValues, param] } });
  };

  const removeFilter = (param) => {
    setState({ ...state,
      filters: { ...state.filters,
        filterByNumericValues: [...state.filters.filterByNumericValues.filter(
          (item) => item.column !== param,
        )] } });
  };

  const setOrdenation = (column = 'name', sort = 'ASC') => {
    setState({ ...state,
      filters: { ...state.filters,
        order: { column, sort } } });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      results.forEach((result) => delete result.residents);
      setState({ ...ApiState, data: results });
    };
    fetchAPI();
  }, []);

  return (
    <ContextSWP.Provider
      value={ { state,
        setFilterByName,
        setFilterNumericValues,
        removeFilter,
        setOrdenation } }
    >
      { children }
    </ContextSWP.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
