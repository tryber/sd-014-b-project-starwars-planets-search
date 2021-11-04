import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState({ results: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planetsData) => {
        setPlanets(planetsData);
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
  children: PropTypes.element,
}.isRequired;
