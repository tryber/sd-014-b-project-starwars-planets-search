import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(0);
  return (
    <DataContext.Provider value={ { data, setData } }>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  const { data, setData } = context;
  useEffect(() => {
    const fetchApi = async () => {
      const fetchStarWarsAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await fetchStarWarsAPI.json();
      await setData(json.results);
    };
    fetchApi();
  }, [setData]);

  return { data, setData };
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
