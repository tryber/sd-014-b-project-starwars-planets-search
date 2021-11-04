import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import Table from './Component/Table';
import planetContext from './Context/planetContext';
import Filters from './Component/Filters';

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [collumns, setCollumns] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
      console.log(results);
    }
    fetchData();
  }, [url]);

  const contextValue = {
    data,
    setData,
    filtered,
    setFiltered,
    collumns,
    setCollumns,
    comparison,
    setComparison,
    value,
    setValue,
  };

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  return (
    <planetContext.Provider value={ contextValue }>
      <SearchBar />
      <Filters />
      <Table />
    </planetContext.Provider>
  );
}

export default App;
