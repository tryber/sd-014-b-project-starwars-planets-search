import React, { useEffect, useState } from 'react';
import fetchData from '../services/StarWarsApi';
import DataContext from './DataContext';

export default function Provider({ children }) {
  const [data, setData] = useState();
  useEffect(() => {
    const getResponse = async () => {
      const response = await fetchData();
      setData(response);
      console.log(response);
      return response;
    };
    getResponse();
  }, []);

  return (
    <DataContext.Provider value={ { data } }>
      {children}
    </DataContext.Provider>
  );
}
