import PropTypes from 'prop-types';
import React, { useState } from 'react';
import dataPlanets from '../services/PlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({
    data: [],
    columns: [],
  });

  const [deleteOption, setDelete] = useState({
    columnsMuted: planets.columns,
  });

  const deleted = (colName) => {
    delete deleteOption[colName];
    setDelete({
      columnsMuted: deleteOption,
    });
  };

  const [search, setSearch] = useState({
    resultSearch: [],
  });

  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: null,
        },
      ],
    },

  });

  const apllyFilter = (filtersCoparison) => {
    if (filters.filters.filterByNumericValues.value === 0) {
      setFilters((prev) => ({
        ...prev,
        filters: {
          filterByNumericValues: [
            // ...filters.filters.filterByNumericValues,
            filtersCoparison,
          ],
        },
      }));
    }
    setFilters((prev) => ({
      ...prev,
      filters: {
        filterByNumericValues: [
          ...filters.filters.filterByNumericValues,
          filtersCoparison,
        ],
      },
    }));
  };

  const settingPlanets = async () => {
    const { results } = await dataPlanets();
    const columnsNames = Object.keys(results[0]);
    const positionResidents = 9;
    columnsNames.splice(positionResidents, 1);
    setPlanets({
      data: [...results],
      columns: [...columnsNames],
    });
    // Dica do Victor Veloso setar o  resultSearch aqui
    setSearch({
      resultSearch: [...results],
    });
  };

  const findPlanet = (find) => {
    setFilters(() => ({
      filters: {
        filterByName: {
          name: find,
        },
      },
    }));
  };

  const newList = (planetsResult) => {
    setSearch(() => ({
      resultSearch: [...planetsResult],
    }));
  };

  const contextValue = {
    data: planets.data,
    columns: planets.columns,
    resultSearch: search.resultSearch,
    filters: filters.filters,
    columnsMuted: deleteOption.columnsMuted,
    settingPlanets,
    findPlanet,
    newList,
    setFilters,
    apllyFilter,
    deleted,
  };

  return (
    <PlanetsContext.Provider
      value={ contextValue }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetsProvider;
