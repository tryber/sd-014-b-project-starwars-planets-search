import React, { useContext } from 'react';
import Table from './components/Table';
import './App.css';
import PlanetsContext from './contexts/PlanetsContext';

function App() {
  const { planets } = useContext(PlanetsContext);
  // console.log(planets);

  return (
    <main>
      <span>Hello, App!</span>
      <Table />
    </main>
  );
}

export default App;
