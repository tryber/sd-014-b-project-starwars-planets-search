import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useFetchPlanets from '../hooks/fetchStarwarsPlanets';
import Context from './Context';

function Provider({ children }) {
  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [
    planets,
    filterDataForName,
    filterPlanetsForValues,
    resetPlanets,
  ] = useFetchPlanets();
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterName = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
    filterDataForName(target.value);
  };

  const handleFilterValues = (filterValue) => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(filterValue),
    });
  };

  const deleteFilterNumeric = (column) => {
    const updateFilterNumeric = filters.filterByNumericValues
      .filter((item) => item.column !== column);
    resetPlanets();
    setFilters({
      ...filters,
      filterByNumericValues: updateFilterNumeric,
    });
  };

  useEffect(() => {
    filterPlanetsForValues(filters.filterByNumericValues);
  }, [filters.filterByNumericValues]); // eslint-disable-line react-hooks/exhaustive-deps

  const context = {
    planets,
    filters,
    handleFilterName,
    handleFilterValues,
    deleteFilterNumeric,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
