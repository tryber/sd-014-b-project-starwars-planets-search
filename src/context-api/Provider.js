import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';
import getPlanets from '../services/getPlanets';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  // const [arraySearch, setArraySearch] = useState([]);
  // const [arrayNumeric, setArrayNumeric] = useState([]);
  const [filtredArray, setFiltredArray] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const context = {
    data: planets,
    filtredArray,
    setFiltredArray,
    setFilters,
    filters,
  };

  const fetchPlanets = async () => {
    const result = await getPlanets();
    // console.log(result);
    setPlanets(result);
    setFiltredArray(result);
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
