import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './Context';
import starWarsApi from '../Services/starWarsApi';

export default function Provider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filters: { filterByName: { name: '' } } });

  useEffect(() => {
    const getPlanets = async () => {
      const response = await starWarsApi();
      setInitialPlanets(response.results);
    };
    getPlanets();
  }, []);

  const value = {
    planets: initialPlanets,
    setPlanets: setInitialPlanets,
    filter,
    setFilter,
  };

  return (
    <DataContext.Provider value={ value }>
      {children}
    </DataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
