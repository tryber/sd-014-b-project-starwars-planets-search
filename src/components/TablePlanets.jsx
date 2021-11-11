import React, { useContext } from 'react';
import Context from '../context/Context';

const planets = [
  'name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Residents',
  'Films',
  'Created',
  'Edited',
];

function TablePlanets() {
  const { response } = useContext(Context);
  return (
    <div>
      <table>
        <thead>
          <tr>
            { planets.map((name) => <th key={ name }>{name}</th>) }
          </tr>
        </thead>
        <tbody>
          { response.map((index) => (
            <tr key={ index.url }>
              <td>{ index.name }</td>
              <td>{ index.rotation_period }</td>
              <td>{ index.orbital_period }</td>
              <td>{ index.diameter }</td>
              <td>{ index.climate }</td>
              <td>{ index.gravity }</td>
              <td>{ index.terrain }</td>
              <td>{ index.surface_water }</td>
              <td>{ index.population }</td>
              <td>{ index.residents.length }</td>
              <td>{ index.films.length }</td>
              <td>{ index.created }</td>
              <td>{ index.edited }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default TablePlanets;
