import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/fetchPlanetsApi';

function PlanetsProvider({ children }) {
  const columnsOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueComparison, setValueComparison] = useState();
  const [newColumns, setNewColumns] = useState(columnsOptions);
  const [isToCompare, setIsToCompare] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: 'maior que',
        value: '',
      },
    ],
  });

  const planetsData = async () => {
    const planets = await fetchPlanets();
    setData(planets);
  };

  useEffect(() => {
    planetsData();
  }, []);

  // ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/81/commits/d03e3e3aab542b3ba0af1bd5a1ca67a776a0cf29
  const filterByNamePlanets = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        name: value,
      },
    });
  };

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    planetsData,
    filterByNamePlanets,
    column,
    setColumn,
    comparison,
    setComparison,
    valueComparison,
    setValueComparison,
    newColumns,
    setNewColumns,
    isToCompare,
    setIsToCompare,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

// ref: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/82/files
PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
