/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../Context/PlanetContext';
import fetchPlanets from '../services/fetchPlanets';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setNames] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setPlanets(response.results);
      setFilteredPlanets(response.results);
    }; getPlanets();
  }, []);

  useEffect(() => {
    if (name === '') return setFilteredPlanets(planets);
    const planetsWithFilter = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    setFilteredPlanets(planetsWithFilter);
  }, [name]);

  const planetState = {
    setNames,
    filteredPlanets,
    filters:
    {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  };

  return (
    <PlanetContext.Provider value={ planetState }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
