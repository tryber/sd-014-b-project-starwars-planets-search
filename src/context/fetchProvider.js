import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApiPlanets from '../services/servicesAPI';
import MyContext from './MyContext';

function FetchProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchApiPlanets();
      setData(result);
    })();
  }, []);

  const objContext = {
    data,
  };

  return (
    <MyContext.Provider value={ objContext }>
      { children }
    </MyContext.Provider>
  );
}

FetchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default FetchProvider;
