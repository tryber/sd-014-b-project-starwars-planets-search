import React from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Table from './Components/Table';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
