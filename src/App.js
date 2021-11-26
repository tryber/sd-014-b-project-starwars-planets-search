import React, { useEffect, useState } from 'react';
import { getPlanets } from './services';
import './App.css';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    (async () => setPlanets(await getPlanets()))();
  }, []);

  return (
    <>
      <span>Hello, App!</span>
      <ul>
        {planets.map((p) => <li key={ p.name }>{p.name}</li>)}
      </ul>
      <Table />
    </>
  );
}

export default App;
