import PropTypes from 'prop-types';
import React from 'react';
import useFetchPlanets from '../hooks/fetchStarwarsPlanets';
import Context from './Context';

function Provider({ children }) {
  const [data, loading] = useFetchPlanets();

  return (
    <Context.Provider value={ { data, loading } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
