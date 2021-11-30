import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useFetchPlanets from '../hooks/fetchPlanets';
import Context from './AppContext';

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
  // Requisitos 5 e 6 consultados nesse repositório.
  /** sd-014-b-project-starwars-planets-search/pull/3commits/b669eb3384cd4d3afb5b062aedc1c608fe7b7119 * */
  const orderPlanetsByName = (planetsData, column, sort) => {
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

  const filterPlanetsName = (name) => {
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
  // Requisitos 5 e 6 consultados nesse repositório.
  /** https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/
   * 3/commits/027f5df9c233a5effcb4a676ac2491477e6eb575 */
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
    filterPlanetsName(target.value);
  };

  const changeFilterValues = (filterValue) => {
    const updateValues = filters.filterByNumericValues.concat(filterValue);
    setFilters({
      ...filters,
      filterByNumericValues: updateValues,
    });
    filterPlanetsForValues(updateValues, planets);
  };

  const changeOrderColumns = (order) => {
    setFilters({
      ...filters,
      order,
    });
    if (order.column === 'name') {
      setPlanets(orderPlanetsByName(planets, order.column, order.sort));
    } else {
      setPlanets(orderPlanetsForValue(planets, order.column, order.sort));
    }
  };

  useEffect(() => {
    if (data) {
      setPlanets(orderPlanetsByName(data.results, 'name', 'ASC'));
    }
  }, [data]);

  const context = {
    planets,
    filterByNumericValues: filters.filterByNumericValues,
    order: filters.order,
    handleFilterName,
    changeFilterValues,
    deleteFilterNumeric,
    changeOrderColumns,
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
