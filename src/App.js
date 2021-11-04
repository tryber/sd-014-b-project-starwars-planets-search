import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Inputs from './components/Inputs';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Inputs />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
