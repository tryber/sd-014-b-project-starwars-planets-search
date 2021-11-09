import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import SWContext from './SWContext';
import mockData from '../testData';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchAPI() {
    setIsLoading(true);
    try {
      const apiData = await fetch(API).json();
      setData(apiData.results);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setData(mockData.results);
      setIsLoading(false);
    }
  }

  useEffect(() => { fetchAPI(); }, []);

  return (
    <SWContext.Provider value={ { data, isLoading, error } }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;
