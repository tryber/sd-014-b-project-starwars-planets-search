import React from 'react';
import './App.css';
import SWProvider from './context/SWProvider';
import Table from './components/Table';
import SearchProvider from './context/SearchProvider';
import Search from './components/Search';

function App() {
  return (
    <SWProvider>
      <SearchProvider>
        <Search />
        <Table />
      </SearchProvider>
    </SWProvider>
  );
}

export default App;
