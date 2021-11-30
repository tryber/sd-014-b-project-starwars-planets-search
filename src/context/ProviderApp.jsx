import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext();

export const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [columSort, setColumSort] = useState();
  const [ascOrDsc, setAscOrDsc] = useState('ASC');

  const magicNumber = -1;

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    const sortedResponse = responseJson.results.sort((a, b) => (
      a.name > b.name ? 1 : magicNumber
    ));
    setData(sortedResponse);
    setApiResponse(sortedResponse);
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
      order: {
        column: columSort,
        sort: ascOrDsc,
      },
    },
    setFilter,
    setFilterNumeric,
    apiResponse,
    setApiResponse,
    columSort,
    setColumSort,
    ascOrDsc,
    setAscOrDsc,
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
