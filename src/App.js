import React from 'react';
import GlobalStorage from './context/GlobalStorage';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div>
      <GlobalStorage>
        <Table />
        <SearchBar />
      </GlobalStorage>
    </div>
  );
}
export default App;
