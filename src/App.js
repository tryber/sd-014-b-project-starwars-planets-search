import React from 'react';
import StarwarsProvider from './context/Provider';
import InputFindPlanets from './components/InputFindPlanets';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <StarwarsProvider>
      <InputFindPlanets />
      <Table />
    </StarwarsProvider>
  );
}

export default App;
