import React, { useState, createContext } from 'react';
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
  const [planets, setPlanets] = useState(INITIAL_STATE.planets);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const filterPlanetsByName = (name) => {
    if (planets && name !== '') {
      const filtered = planets.filter((planet) => planet.name.includes(name));
      setPlanets(filtered);
    } else {
      setPlanets(planets);
    }
  };

  const handleFilterByName = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
    filterPlanetsByName(value);
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

  const handleFilterValues = (filterValue) => {
    const updateFilterValues = filters.filterByNumericValues.concat(filterValue);
    setFilters({
      ...filters,
      filterByNumericValues: updateFilterValues,
    });
    filterPlanetsByValues(updateFilterValues, planets);
  };

  const resetPlanets = () => {
    setPlanets(planets);
  };

  const deleteNumericFilter = (column) => {
    const updateNumericFilter = filters.filterByNumericValues.filter(
      (item) => item.column !== column,
    );
    if (updateNumericFilter.length > 0) {
      filterPlanetsByValues(updateNumericFilter, planets);
    } else {
      resetPlanets();
    }
    setFilters({
      ...filters,
      filterByNumericValues: updateNumericFilter,
    });
  };

  const context = {
    planets,
    setPlanets,
    filters,
    setFilters,
    handleFilterByName,
    handleFilterValues,
    filterByNumericValues: filters.filterByNumericValues,
    deleteNumericFilter,
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
