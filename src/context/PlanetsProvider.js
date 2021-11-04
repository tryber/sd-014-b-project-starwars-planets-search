import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchPlanets from '../services';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

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

    <PlanetsContext.Provider
      value={ { data,
        isFetching,
        filters,
        setFilters } }
    >
      { children }
    </PlanetsContext.Provider>

  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
