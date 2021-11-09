import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import mockData from '../testData';

const PlanetsContext = createContext();

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);
  const [filterName, setFilterName] = useState([]);
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const results = await fetch(URL).then((response) => response.json());
        setData(results.results);
        setPlanets(results.results);
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
    },
    setFilterName,
    setFilterNumeric,
    planets,
    setPlanets,
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

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
