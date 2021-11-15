import React, { useEffect, useState } from 'react';
import { getPlanets } from './services';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    (async () => setPlanets(await getPlanets()))();
  }, []);

  console.log(planets);

  return (
    <>
      <span>Hello, App!</span>
      <ul>
        {planets.map((p) => <li key={ p.name }>{p.name}</li>)}
      </ul>
    </>
  );
}

export default App;
