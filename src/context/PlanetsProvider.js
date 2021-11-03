import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  async function requestPlanets() {
    const request = await fetchPlanets();
    request.results.map((key) => (
      delete key.residents
    ));
    setData(request.results);
    setIsFetching(false);
  }

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    !isFetching && (
      <PlanetsContext.Provider value={ { data, isFetching } }>
        { children }
      </PlanetsContext.Provider>
    )
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
