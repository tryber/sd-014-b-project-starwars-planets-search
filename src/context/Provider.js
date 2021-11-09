import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function Provider({ children }) {
  const [allPlanetsList, setAllPlanetsList] = useState([]);
  const [toShowPlanetsList, setToShowPlanetsList] = useState([]);
  const [columnsList, setColumnsList] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
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
    columnsList,
    fetchPlanets,
    setFiltersList,
    filterByName,
    setColumnsList,
    setToShowPlanetsList,
  };

  return (
    <Context.Provider
      value={ { ...contextValue } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
