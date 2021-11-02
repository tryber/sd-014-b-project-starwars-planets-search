import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import AppContext from './context/AppContext';
import fetchURL from './components/helpers';
import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const contextValue = {
    data,
    columnFilter,
    comparisonFilter,
    valueFilter,
    filteredData,
    setData,
    setColumnFilter,
    setComparisonFilter,
    setValueFilter,
    setFilteredData,
  };

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchURL());
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      <Header />
      <Table />
    </AppContext.Provider>
  );
}

export default App;
