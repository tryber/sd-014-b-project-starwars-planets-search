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

  useEffect(() => {
    if (data) {
      setPlanets(data.results);
    }
  }, [data]);

  const context = {
    planets,
    filterByNumericValues: filters.filterByNumericValues,
    handleFilterName,
    handleFilterValues,
    deleteFilterNumeric,
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
