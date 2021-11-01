import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext({});

export function PlanetsProvider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.results);
      });
  }, []);

  useEffect(() => {
    if (filters.filterByName.name === '') {
      fetch(URL)
        .then((response) => response.json())
        .then((apiData) => {
          setData(apiData.results);
        });
    }

    setData((prevData) => prevData.filter(
      (planet) => planet.name.includes(filters.filterByName.name),
    ));
  }, [filters.filterByName]);

  useEffect(() => {
    const { column } = filters.filterByNumericValues[0];
    const { value } = filters.filterByNumericValues[0];

    if (value === '') {
      fetch(URL)
        .then((response) => response.json())
        .then((apiData) => {
          setData(apiData.results);
        });
    }

    switch (filters.filterByNumericValues[0].comparison) {
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
  }, [filters.filterByNumericValues]);

  return (
    <PlanetsContext.Provider value={ { data, setData, filters, setFilters } }>
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
