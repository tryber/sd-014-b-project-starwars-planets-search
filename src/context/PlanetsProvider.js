import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetList from '../services/FetchPlanetList';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const columns = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });
  const [planetsUpdated, setPlanetsUpdated] = useState([]);
  const [columnsOptions, setColumnsOptions] = useState(columns);

  async function getPlanets() {
    const planets = await fetchPlanetList();

    setData(planets);
    setPlanetsUpdated(planets);
    setIsLoading(false);
  }

  const context = {
    data,
    isLoading,
    getPlanets,
    filters,
    setFilters,
    setPlanetsUpdated,
    planetsUpdated,
    columnsOptions,
    setColumnsOptions,
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
