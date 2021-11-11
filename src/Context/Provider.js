import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../Services/fetchApi';

function Provider({ children }) {
  const [data, setData] = useState();

  useEffect(() => {
    const findPlanetsFromApi = async () => {
      const planets = await fetchApi();
      setData(planets);
    };
    findPlanetsFromApi();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;
