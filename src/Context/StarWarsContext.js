import React, { createContext, useEffect, useState } from 'react';
import planetsAPI from '../services/fetchAPI';

const PlanetsContext = createContext();

export const PlanetsData = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { results } = await planetsAPI();
      setData(results);
    };
    search();
  }, []);

  const dataValue = {
    data,
  };

  return (
    <PlanetsContext.Provider value={ dataValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsContext;
