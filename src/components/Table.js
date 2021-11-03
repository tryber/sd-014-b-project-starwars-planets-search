import React, { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);

  const headers = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Create', 'Edited', 'Url'];

  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const fetchUrl = async () => {
    const resp = await fetch(URL);
    const json = await resp.json();
    setData(json.results);
  };

  useEffect(() => {
    fetchUrl();
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((head, i) => (
            <th key={ i }><b>{ head }</b></th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((planet) => (
          <tr key={ planet.url }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>{ planet.films.length }</td>
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
