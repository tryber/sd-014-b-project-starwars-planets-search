import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import mockData from '../testData';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);
  const [filters, setFilters] = useState({
    byName: { name: '' },
  });

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const results = await fetch(URL).then((response) => response.json());
        setData(results.results);
      } catch (error) {
        setServerError(error);
        setData(mockData.results);
      }
      setLoading(false);
    };
    getPlanets();
  }, []);

  const handleFilterName = (event) => {
    const { value } = event.target;
    setFilters({ byName: { name: value.toLowerCase() } });
  };

  const context = {
    data, loading, filters, handleFilterName, serverError,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
