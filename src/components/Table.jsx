import React, { useState, useEffect } from 'react';
import fetchApi from '../helpers/fetchApi';

export default function Table() {
  const [data, setData] = useState([]);

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  async function fetchUrl(PlantUrl) {
    const result = await fetchApi(PlantUrl);
    setData(result.results);
  }

  useEffect(() => {
    fetchUrl(URL);
  }, []);

  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          { headers.map((item) => (
            <th key={ item }>{ item }</th>)) }
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
        )) }
      </tbody>
    </table>
  );
}
