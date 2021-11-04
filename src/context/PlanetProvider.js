import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetsSearch, setPlanetsSearch] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  async function fetchPlanetAPI() {
    const response = await fetch(endPoint);
    const data = await response.json();
    const { results } = data;
    const planetResult = results.filter((result) => delete result.residents);
    setPlanetsData(planetResult);
    setPlanetsFilter(planetResult);
  }

  useEffect(() => {
    fetchPlanetAPI();
  }, []);

  function filterTable(name) {
    const filterData = [...planetsFilter];
    return filterData.filter((value) => value
      .name.toLowerCase().includes(name.toLowerCase()));
  }

  function handleChange(string) {
    setPlanetsData(filterTable(string));
    setPlanetsSearch({
      filters: {
        filterByName: {
          name: string,
        },
      },
    });
  }

  const contextObject = {
    planetsData,
    handleChange,
    planetsSearch,
  };

  return (
    <PlanetContext.Provider value={ contextObject }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlanetProvider;
