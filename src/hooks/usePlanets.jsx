import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext({});

export function PlanetsProvider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [allPlanets, setAllPlanets] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const requestAPI = async () => {
    const response = await fetch(URL);
    const apiData = await response.json();
    setData(apiData.results);
    setAllPlanets(apiData.results);
  };

  useEffect(() => {
    requestAPI();
  }, []);

  useEffect(() => {
    if (filters.filterByName.name === '') {
      requestAPI();
    }

    setData((prevData) => prevData.filter(
      (planet) => planet.name.includes(filters.filterByName.name),
    ));
  }, [filters.filterByName]);

  useEffect(() => {
    filters.filterByNumericValues.forEach((filter) => {
      const { column } = filter;
      const { value } = filter;

      switch (filter.comparison) {
      case 'maior que':
        setData((prevData) => prevData.filter(
          (planet) => Number(planet[`${column}`]) > Number(value),
        ));
        break;
      case 'menor que':
        setData((prevData) => prevData.filter(
          (planet) => Number(planet[`${column}`]) < Number(value),
        ));
        break;
      case 'igual a':
        setData((prevData) => prevData.filter(
          (planet) => Number(planet[`${column}`]) === Number(value),
        ));
        break;
      default:
        break;
      }
    });
  }, [allPlanets, filters.filterByNumericValues]);

  function handleClickDeleteFilter(index) {
    const allFilters = filters.filterByNumericValues;
    allFilters.splice(index, 1);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: allFilters,
    }));
    setData(allPlanets);
  }

  return (
    <PlanetsContext.Provider
      value={ {
        data, setData, filters, setFilters, handleClickDeleteFilter } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function usePlanets() {
  const context = useContext(PlanetsContext);

  return context;
}
