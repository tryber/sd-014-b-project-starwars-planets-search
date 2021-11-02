import React, { useState, useEffect } from 'react';
import fetchURL from '../components/helpers';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setPlanets] = useState([]);
  const [isLoading, changeLoading] = useState(false);

  const contextValue = {
    data,
    setPlanets,
    isLoading,
  };

  useEffect(() => {
    changeLoading(true);
    const fetchPlanets = async () => {
      setPlanets(await fetchURL());
    };
    fetchPlanets();
    changeLoading(false);
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
