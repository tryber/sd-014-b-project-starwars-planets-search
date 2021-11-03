import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import getPlanets from '../services/getPlanets';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [arraySearch, setArraySearch] = useState([]);

  const context = {
    data: planets,
    arraySearch,
    setArraySearch,
  };

  const fetchPlanets = async () => {
    const result = await getPlanets();
    // console.log(result);
    setPlanets(result);
  };

  useEffect(() => {
    fetchPlanets();
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
