import React, { useState, useEffect } from 'react';

const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Table() {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);

  const fetchApiPlanets = async () => {
    const response = await fetch(API);
    const resolve = await response.json();
    setData(resolve.results);
    const dataOfPlanet = Object.values((resolve.results))[0];
    const keysOfPlanet = Object.keys(dataOfPlanet)
      .filter((key) => key !== 'residents');
    setKeys(keysOfPlanet);
  };

  useEffect(() => {
    fetchApiPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          { keys.map((key, index) => <th key={ index }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        { data.map((planet, index) => (
          <tr key={ index }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films }</td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
