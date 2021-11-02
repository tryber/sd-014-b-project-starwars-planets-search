import React, { useState, useEffect } from 'react';
import './App.css';
import AppContext from './Context';
import FilterBar from './FiltreBar';
import SearchBar from './SearchBar';
import Table from './Table';

function App() {
  const [data, setData] = useState([]);
  const [filtred, setFiltred] = useState([]);
  const [columnFilter, setColumnFilter] = useState('');
  const [compairsonFilter, setComparisonFilter] = useState('');
  const [value, setValue] = useState('');

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
    filtred,
    setFiltred,
    columnFilter,
    setColumnFilter,
    compairsonFilter,
    setComparisonFilter,
    value,
    setValue,
  };

  useEffect(() => {
    setFiltred(data);
  }, [data]);

  useEffect(() => {
    api();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      <SearchBar />
      <FilterBar />
      <Table />
    </AppContext.Provider>
  );
}

export default App;
