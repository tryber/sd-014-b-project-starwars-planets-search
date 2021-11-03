import React, { useContext, useEffect } from 'react';
import PlanetsTableContext from './contexts';
import fetchPlanets from './services/StarWarsAPI';
import './App.css';

function App() {
  const { data, setData, setLoading } = useContext(PlanetsTableContext);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanets();
      setData({ ...data, planets });
      setLoading(false);
    };

    getPlanets();
  }, []);

  return (
    <div>
      <h1>Star Wars Planets Search</h1>
    </div>
  );
}

export default App;
