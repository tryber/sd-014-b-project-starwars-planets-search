import React from 'react';
import './App.css';
import Header from './components/Headers';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
