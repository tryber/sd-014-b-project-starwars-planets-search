import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  planets: [],
};

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
};

const PlanetsContext = createContext(INITIAL_STATE);

export function PlanetsProvider({ children }) {
  const [allPlanets, setAllPlanets] = useState([]);
  const [planets, setPlanets] = useState(allPlanets);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const orderPlanetsForString = (planetsData, column, sort) => {
    const NUM_MIN = -1;
    if (sort === 'ASC') {
      return planetsData.sort((a, b) => (a[column] > b[column] ? 1 : NUM_MIN));
    }
    return planetsData.sort((a, b) => (a[column] < b[column] ? 1 : NUM_MIN));
  };

  const orderPlanetsForValue = (planetsData, column, sort) => {
    const NUM_MIN = -1;
    if (sort === 'ASC') {
      return planetsData.sort(
        (a, b) => (Number(a[column]) > Number(b[column]) ? 1 : NUM_MIN),
      );
    }
    return planetsData.sort(
      (a, b) => (Number(a[column]) < Number(b[column]) ? 1 : NUM_MIN),
    );
  };

  const handleFilterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  useEffect(() => {
    if (filters.filterByName.name !== '') {
      const filtered = allPlanets.filter(
        (planet) => planet.name.includes(filters.filterByName.name),
      );
      setPlanets(filtered);
    } else {
      setPlanets(allPlanets);
    }
  }, [allPlanets, filters.filterByName.name]);

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
    } else {
      setPlanets(planetsData);
    }
  };

  useEffect(() => {
    filterPlanetsByValues(filters.filterByNumericValues, allPlanets);
  }, [filters.filterByNumericValues, allPlanets]);

  const handleFilterValues = (filterValue) => {
    const updateFilterValues = filters.filterByNumericValues.concat(filterValue);
    setFilters({
      ...filters,
      filterByNumericValues: updateFilterValues,
    });
  };

  const deleteNumericFilter = (column) => {
    const updateNumericFilter = filters.filterByNumericValues.filter(
      (item) => item.column !== column,
    );
    setFilters({
      ...filters,
      filterByNumericValues: updateNumericFilter,
    });
  };

  const handleOrderColumns = (order) => {
    setFilters({
      ...filters,
      order,
    });
    if (order.column === 'name') {
      setPlanets(orderPlanetsForString(planets, order.column, order.sort));
    } else {
      setPlanets(orderPlanetsForValue(planets, order.column, order.sort));
    }
  };

  useEffect(() => {
    if (allPlanets) {
      setPlanets(orderPlanetsForString(allPlanets, 'name', 'ASC'));
    }
  }, [allPlanets]);

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
    handleFilterByName,
    handleFilterValues,
    filterByNumericValues: filters.filterByNumericValues,
    deleteNumericFilter,
    allPlanets,
    setAllPlanets,
    handleOrderColumns,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContext;
