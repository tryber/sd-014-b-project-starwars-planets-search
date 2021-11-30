import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import usePlanets from '../hooks/usePlanets';
import planetContext from './planetContext';

// muita refatoração nesse arquivo após ajuda do Sathler e Adilson Gabriel

function PlanetContextProvider({ children }) {
  const initialFilters = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'population',
      sort: 'asc',
    },
  };

  const [data] = usePlanets();
  const [planets, setPlanets] = useState();
  const [filters, setFilters] = useState(initialFilters);

  const orderPlanetsByString = (planetsData, column, sort) => {
    const MINUS_ONE = -1;
    if (sort === 'asc') {
      return planetsData.sort((a, b) => (a[column] > b[column] ? 1 : MINUS_ONE));
    }
    return planetsData.sort((a, b) => (a[column] < b[column] ? 1 : MINUS_ONE));
  };

  const orderPlanetsByValue = (planetsData, column, sort) => {
    const MINUS_ONE = -1;
    if (sort === 'asc') {
      return planetsData.sort((a, b) => (Number(a[column]) > Number(b[column])
        ? 1 : MINUS_ONE));
    }
    return planetsData.sort((a, b) => (Number(a[column]) < Number(b[column])
      ? 1 : MINUS_ONE));
  };

  const filterPlanetsByName = (name) => {
    if (planets && name !== '') {
      const filtered = planets.filter((item) => item.name.includes(name));
      setPlanets(filtered);
    } else {
      setPlanets(data.results);
    }
  };

  const filterPlanetsByValues = (valuesFilters, planetsData) => {
    if (valuesFilters.length !== 0) {
      valuesFilters.forEach((filter) => {
        const filtered = planetsData.filter((item) => {
          const columnValue = Number(item[filter.column]);
          const filterValue = Number(filter.value);
          if (filter.comparison === 'maior que') {
            return columnValue > filterValue;
          }
          if (filter.comparison === 'menor que') {
            return columnValue < filterValue;
          }
          return columnValue === filterValue;
        });
        setPlanets(filtered);
      });
    }
  };

  const resetPlanets = () => {
    setPlanets(data.results);
  };

  const deleteFilterNumeric = (column) => {
    const updateFilterNumeric = filters.filterByNumericValues
      .filter((item) => item.column !== column);
    if (updateFilterNumeric.length > 0) {
      filterPlanetsByValues(updateFilterNumeric, data.results);
    } else {
      resetPlanets();
    }
    setFilters({
      ...filters,
      filterByNumericValues: updateFilterNumeric,
    });
  };

  const handleFilterName = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: { name: target.value },
    });
    filterPlanetsByName(target.value);
  };

  const handleFilterValues = (filterValue) => {
    const updateFilterValues = filters.filterByNumericValues.concat(filterValue);
    setFilters({
      ...filters,
      filterByNumericValues: updateFilterValues,
    });
    filterPlanetsByValues(updateFilterValues, planets);
  };

  const handleOrderColumns = (order) => {
    setFilters({
      ...filters,
      order,
    });
    if (order.column === 'name') {
      setPlanets(orderPlanetsByString(planets, order.column, order.sort));
    } else {
      setPlanets(orderPlanetsByValue(planets, order.column, order.sort));
    }
  };

  useEffect(() => {
    if (data) {
      setPlanets(orderPlanetsByString(data.results, 'name', 'asc'));
    }
  }, [data]);

  const context = {
    planets,
    filterByNumericValues: filters.filterByNumericValues,
    order: filters.order,
    handleFilterName,
    handleFilterValues,
    deleteFilterNumeric,
    handleOrderColumns,
  };

  return (
    <planetContext.Provider value={ context }>
      {children}
    </planetContext.Provider>
  );
}

PlanetContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetContextProvider;
