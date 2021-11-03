import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './Context';
import starWarsApi from '../Services/starWarsApi';

export default function Provider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await starWarsApi();
      console.log(response);
      setInitialPlanets(response.results);
    };
    getPlanets();
  }, []);

  const value = {
    planets: initialPlanets,
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
