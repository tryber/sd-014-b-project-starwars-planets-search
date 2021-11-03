import React, { useContext } from 'react';
import Table from './components/Table';
import './App.css';
import { SearchContext } from './provider/Provider';

function App() {
  const { setFilter } = useContext(SearchContext);
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (e) => setFilter(e.target.value) }
        placeholder="Filtrar por nome"
      />
      <Table />
    </div>
  );
}

export default App;
