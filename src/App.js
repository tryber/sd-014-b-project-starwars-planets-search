import React from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <SearchArea />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
