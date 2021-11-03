import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsTableContext from '.';

export default function PlanetsTableProvider({ children }) {
  const [data, setData] = useState({
    planets: [],
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const [loading, setLoading] = useState(true);

  const numericOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const numericComparisons = {
    'igual a': (a, b) => Number(a) === Number(b),
    'maior que': (a, b) => Number(a) > Number(b),
    'menor que': (a, b) => Number(a) < Number(b),
  };

  const contextValue = {
    data,
    filters,
    loading,
    numericOptions,
    numericComparisons,
    setData,
    setFilters,
    setLoading,
  };

  return (
    <PlanetsTableContext.Provider value={ contextValue }>
      {children}
    </PlanetsTableContext.Provider>
  );
}

PlanetsTableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
