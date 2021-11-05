import React from 'react';
import './App.css';
import Table from './Components/Table';
import PlanetProvider from './Provider/PlanetProvider';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <main>
      <h1>Hello, StarWars!</h1>
      <PlanetProvider>
        <SearchForm />
        <Table />
      </PlanetProvider>
    </main>
  );
}

export default App;
