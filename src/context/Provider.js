import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextSWP from './ContextSWP';

const stateAPI = {
  data: {},
};

function Provider({ children }) {
  const [state, newState] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await request.json();
      newState({ ...stateAPI, data: data.results });
    };
    fetchAPI();
  }, []);

  return (
    <ContextSWP.Provider value={ state }>
      { children }
    </ContextSWP.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
