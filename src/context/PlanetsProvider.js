import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetsList, setPlanetList] = useState([]);

  const contextValue = {
    planetsList,
  };

  function fetchPlanets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()
        .then((results) => {
          setPlanetList(results.results);
        }));
  }

  return (
    <PlanetsContext.Provider
      value={ { ...contextValue, fetchPlanets } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
