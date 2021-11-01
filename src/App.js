import React, { useState, useEffect } from 'react';
import './App.css';
import AppContext from './Context';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);

  const api = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const obj = await response.json();
    const result = obj.results;
    setData(result);
    return result;
  };

  const contextValue = {
    data,
    setData,
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      <Table />
    </AppContext.Provider>
  );
}

export default App;
