import React, { useEffect, useState } from 'react';
import PlanetTableRow from './components/PlanetTableRow';

const fetchPlanets = async (url) => {
  const planets = [];

  const buffer = await fetch(url);
  const response = await buffer.json();

  response.results.forEach((planet) => planets.push(planet));

  if (response.next) {
    const planetsContinuation = await fetchPlanets(response.next);
    planetsContinuation.forEach((planet) => planets.push(planet));
  }

  return planets;
};

function App() {
  const [planets, setPlanets] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  useEffect(() => {
    fetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => setPlanets(response));
  }, []);

  useEffect(() => {
    if (planets[0]) {
      setTableHeaders(Object.keys(planets[0]));
    }
  }, [planets]);
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => (
          <PlanetTableRow key={ index } planetInfo={ planet } />
        ))}
      </tbody>
    </table>
  );
}

export default App;
