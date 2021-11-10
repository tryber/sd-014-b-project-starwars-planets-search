import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import SWPlanetsProvider from './context/SWPlanetsProvider';

function App() {
  return (
    <SWPlanetsProvider>
      <Header />
      <Search />
      <Table />
    </SWPlanetsProvider>
  );
}

export default App;
