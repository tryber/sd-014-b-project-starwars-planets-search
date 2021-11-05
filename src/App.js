import React from 'react';
import './App.css';
import Table from './component/Table';
import PlanetApiProvider from './constext/PlanetApiProvider';

function App() {
  return (
    <PlanetApiProvider>
      <Table />
    </PlanetApiProvider>
  );
}

export default App;
