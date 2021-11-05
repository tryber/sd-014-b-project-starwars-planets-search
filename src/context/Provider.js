import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchApiPlanets from '../services/RequestApi';

function Provider({ children }) {
  // const [list, setList] = useState([]);

  const [listPlanets, setListPlanets] = useState([]);

  const [isLoadind, setIsLoading] = useState(true);

  const takePlanets = async () => {
    const planets = await fetchApiPlanets();
    setListPlanets(planets.results);
    // setList(planets.results);
    setIsLoading(false);
  };

  const context = {
    listPlanets,
    setListPlanets,
    isLoadind,
    setIsLoading,
  };

  useEffect(() => {
    takePlanets();
  }, []);

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
