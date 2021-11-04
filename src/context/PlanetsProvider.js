import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [allPlanetsList, setAllPlanetsList] = useState([]);
  const [toShowPlanetsList, setToShowPlanetsList] = useState([]);
  const [filtersList, setFiltersList] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  function fetchPlanets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()
        .then((results) => {
          setAllPlanetsList(results.results);
          setToShowPlanetsList(results.results);
        }));
  }

  function filterByName(searchValue) {
    setToShowPlanetsList(allPlanetsList.filter((planet) => (
      planet.name.toLowerCase().includes(searchValue.toLowerCase())
    )));
  }

  const contextValue = {
    allPlanetsList,
    toShowPlanetsList,
    filtersList,
    fetchPlanets,
    setFiltersList,
    filterByName,
    setToShowPlanetsList,
  };

  return (
    <PlanetsContext.Provider
      value={ { ...contextValue } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
