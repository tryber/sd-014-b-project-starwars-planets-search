import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextSWP from './ContextSWP';

const stateAPI = {
  data: {},
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function Provider({ children }) {
  const [state, setState] = useState();

  const setFilterName = ({ target: { value } }) => {
    setState({ ...state, filters: { ...state.filters, filterByName: { name: value } } });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await request.json();
      results.forEach((result) => delete result.residents);
      setState({ ...stateAPI, data: results });
    };
    fetchAPI();
  }, []);

  return (
    <ContextSWP.Provider value={ { state, setFilterName } }>
      { children }
    </ContextSWP.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
