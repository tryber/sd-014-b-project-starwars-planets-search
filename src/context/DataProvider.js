import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';

const DataProvider = (props) => {
  const [data, setData] = useState();
  const fetchData = () => {
    feth('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={ { data } }>
      { props.children }
    </DataContext.Provider>
  );
};

export default DataProvider;
