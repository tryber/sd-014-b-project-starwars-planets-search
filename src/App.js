import React, { useContext, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsContext from './context/PlanetsContext';

function App() {
  const { requestPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Table />
    </main>
  );
}

export default App;
