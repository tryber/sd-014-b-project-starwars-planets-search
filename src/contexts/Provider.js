import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchData from '../helpers/planetsAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const getData = async () => {
      const planets = await fetchData();
      setData(planets.results);
      setFilteredPlanets(planets.results);
    };
    getData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));
    setFilteredPlanets(filteredData);
  }, [data, name]);

  const contextValue = {
    data,
    filteredPlanets,
    filters: {
      filterByName: {
        name,
      },
    },
    setName,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
