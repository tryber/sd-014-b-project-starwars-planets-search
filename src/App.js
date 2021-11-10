import React from 'react';
import './App.css';
import Filters from './components/Filters';
import PlanetsTable from './components/PlanetsTable';
import SearchBar from './components/SearchBar';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <main>
        <h1>Starwars Planets Search</h1>
        <SearchBar />
        <p />
        <Filters />
        <PlanetsTable />
      </main>
    </Provider>
  );
}

export default App;
