import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext({});

export function PlanetsProvider({ children }) {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const requestAPI = async () => {
    const response = await fetch(URL);
    const apiData = await response.json();
    setData(apiData.results);
  };

  useEffect(() => {
    requestAPI();
  }, []);

  function handleClickDeleteFilter(index) {
    const allFilters = filters.filterByNumericValues;
    allFilters.splice(index, 1);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: allFilters,
    }));
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
