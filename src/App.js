import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';

function App() {
  return (
    <main className="main">
      <StarWarsProvider>
        <Filter />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
