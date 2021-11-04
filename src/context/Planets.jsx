import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planetsObject) => {
        const planetsArray = planetsObject.results.map((result) => {
          delete result.residents;
          return result;
        });
        setPlanets(planetsArray);
        setLoading(false);
      });
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { planets, loading } }
    >
      { children }
    </PlanetsContext.Provider>
  );
};

export const usePlanets = () => {
  const context = useContext(PlanetsContext);
  if (!context) { throw new Error('usePlanets must be used within a PlanetsProvider'); }
  return context;
};

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
