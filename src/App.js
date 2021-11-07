import React from 'react';
import GlobalStorage from './context/GlobalStorage';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <GlobalStorage>
        <SearchBar />
        <Table />
      </GlobalStorage>
    </div>
  );
}
export default App;
