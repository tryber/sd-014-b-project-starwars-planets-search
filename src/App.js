import React from 'react';
import './App.css';
import FilterNumeric from './components/FilterNumeric';
import Search from './components/Search';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <header className="header">
        <section className="search-and-title">
          <h1>Projeto Star Wars - Trybe</h1>
          <Search />
        </section>
        <FilterNumeric />
      </header>
      <Table />
    </Provider>
  );
}

export default App;
