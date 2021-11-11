import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import mockData from '../testData';

const DSC = -1;

const PlanetsContext = createContext();

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);
  const [filterName, setFilterName] = useState([]);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [sortOption, setSortOption] = useState();
  const [sortOrder, setSortOrder] = useState('ASC');

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const results = await fetch(URL).then((response) => response.json());
        const sortedResult = results.results.sort((a, b) => (
          a.name > b.name ? 1 : DSC
        ));
        setData(sortedResult);
        setPlanets(sortedResult);
      } catch (error) {
        setServerError(error);
        setData(mockData.results);
        setPlanets(mockData.results);
      }
      setLoading(false);
    };
    getPlanets();
  }, []);

  const context = {
    data,
    loading,
    serverError,
    setData,
    filters: {
      filterByName: { name: filterName },
      filterByNumericValues: filterNumeric,
      order: {
        column: sortOption,
        sort: sortOrder,
      },
    },
    setFilterName,
    setFilterNumeric,
    planets,
    setPlanets,
    sortOption,
    setSortOption,
    sortOrder,
    setSortOrder,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
};

export const usePlanets = () => {
  const context = useContext(PlanetsContext);

  return context;
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
