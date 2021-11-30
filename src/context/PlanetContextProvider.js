import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetContext from './planetContext';

const PlanetContextProvider = ({ children }) => {
  const INIT_FILTER = {
    filters: {
      filterByName: {},
      filterByNumericValues: [],
      order: {
        column: 'population',
        sort: 'ASC',
      },
    },
  };

  const tableColums = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [planets, setPlanets] = useState();
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [planetsFilter, setPlanetsFilter] = useState(INIT_FILTER);
  const [columns, setColumns] = useState(tableColums);
  const [isFiltered, setIsFiltered] = useState(false);

  const nameFilter = (value) => {
    setPlanetsFilter({
      filters: {
        ...planetsFilter.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const numericFilter = (value) => {
    setPlanetsFilter({
      filters: {
        ...planetsFilter.filters,
        filterByNumericValues: [...planetsFilter.filters.filterByNumericValues, value],
      },
    });
  };

  const orderBy = (column) => {
    setPlanetsFilter({
      filters: {
        ...planetsFilter.filters,
        order: {
          sort: planetsFilter.filters.order.sort,
          column,
        },
      },
    });
  };

  const sortRadio = (sort) => {
    setPlanetsFilter({
      filters: {
        ...planetsFilter.filters,
        order: {
          ...planetsFilter.filters.order,
          sort,
        },
      },
    });
  };

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    setIsLoading(true);
    const planetsAPI = async () => {
      const request = await fetch(URL);
      const response = await request.json();
      setPlanets(response.results);
      setIsLoading(false);
    };
    planetsAPI();
  }, []);

  useEffect(() => {
    setPlanets(filteredPlanets);
  }, [filteredPlanets]);

  const context = {
    planets,
    setPlanets,
    isLoading,
    planetsFilter,
    setPlanetsFilter,
    nameFilter,
    numericFilter,
    filteredPlanets,
    setFilteredPlanets,
    columns,
    setColumns,
    orderBy,
    sortRadio,
    tableColums,
    isFiltered,
    setIsFiltered,
  };

  return (
    <planetContext.Provider value={ context }>
      { children }
    </planetContext.Provider>
  );
};

PlanetContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf({})).isRequired,
};

export default PlanetContextProvider;
