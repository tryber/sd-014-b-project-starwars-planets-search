import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  async function fetchPlanets() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    console.log(planets.results);
    setData(planets.results);
    setIsFetch(true);
  }

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetsContext.Provider value={ { data, setData, isFetch } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
