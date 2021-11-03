import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import planetsRequest from '../Services/services';

export const MyContext = createContext(1);

function PlanetsContextComponent({ children }) {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    setPlanets(await planetsRequest());
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const context = {
    data: planets,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

PlanetsContextComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsContextComponent;
