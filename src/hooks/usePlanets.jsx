import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PlanetsContext = createContext({});

export function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((apiData) => {
        console.log(apiData);
        setData(apiData.results);
      });
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function usePlanets() {
  const context = useContext(PlanetsContext);

  return context;
}
