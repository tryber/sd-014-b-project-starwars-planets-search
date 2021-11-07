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
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };

  const [data] = useFetchPlanets();
  const [planets, setPlanets] = useState();
  const [filters, setFilters] = useState(initialFilters);

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
      return planetsData.sort((a, b) => (Number(a[column]) > Number(b[column])
        ? 1 : NUM_MIN));
    }
    return planetsData.sort((a, b) => (Number(a[column]) < Number(b[column])
      ? 1 : NUM_MIN));
  };

  const filterPlanetsForName = (name) => {
    if (planets && name !== '') {
      const filtered = planets.filter((item) => item.name.includes(name));
      setPlanets(filtered);
    } else {
      setPlanets(data.results);
    }
  };

  const filterPlanetsForValues = (valuesFilters, planetsData) => {
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
      filterPlanetsForValues(updateFilterNumeric, data.results);
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
    filterPlanetsForName(target.value);
  };

  const handleFilterValues = (filterValue) => {
    const updateFilterValues = filters.filterByNumericValues.concat(filterValue);
    setFilters({
      ...filters,
      filterByNumericValues: updateFilterValues,
    });
    filterPlanetsForValues(updateFilterValues, planets);
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
    if (data) {
      setPlanets(orderPlanetsForString(data.results, 'name', 'ASC'));
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
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
