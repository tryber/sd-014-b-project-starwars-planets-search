import React, { useEffect } from 'react';
import './App.css';
import FilterBar from './Components/filterBar';
import Table from './Components/Table';
import usePlanets from './hook';

export default function App() {
  const { setApi } = usePlanets();
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(URL);
      const planets = await response.json();
      setApi(planets.results);
    };
    fetchApi();
  });
  return (
    <main>
      <h1>Projeto Stars Wars - Trybe</h1>
      <FilterBar />
      <Table />
    </main>
  );
}
