import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsTableContext from '.';

function PlanetsTableProvider({ children }) {
  const [data, setData] = useState({});
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

  const contextValue = {
    data,
    filters,
    loading,
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

export default PlanetsTableProvider;
