import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext();

export const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
    setApiResponse(responseJson.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    data,
    setData,
    filters: {
      filterName: { name: filter },
      filterNumbers: filterNumeric,
    },
    setFilter,
    setFilterNumeric,
    apiResponse,
    setApiResponse,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
};

export const ProviderApp = () => {
  const context = useContext(PlanetsContext);
  return context;
};

// https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/62/files,
// pode colocar o context e o provider no mesmo arquivo e tratar o provider como uma função.

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
