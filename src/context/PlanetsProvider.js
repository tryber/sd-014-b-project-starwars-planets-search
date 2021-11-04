import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [backup, setBackup] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  function filterByName(value) {
    const filteredPlanets = backup.filter(
      (planet) => (
        planet.name.toLowerCase().includes(value.toLowerCase())
      ),
    );
    console.log('antes do if');
    return filteredPlanets;
  }

  const contextValue = {
    data,
    setData,
    backup,
    setBackup,
    isFetch,
    setIsFetch,
    filters,
    setFilters,
    filterByName,
  };

  async function fetchPlanets() {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await response.json();
    setData(planets.results);
    setBackup(planets.results);
    setIsFetch(true);
  }

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
