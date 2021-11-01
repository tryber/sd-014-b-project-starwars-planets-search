import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext({});

export function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData.results);
      });
  }, []);

  useEffect(() => {
    if (filters.filterByName.name === '') {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((apiData) => {
          setData(apiData.results);
        });
    }

    setData((prevData) => prevData.filter(
      (planet) => planet.name.includes(filters.filterByName.name),
    ));
  }, [filters]);

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
