import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  const thContent = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Create', 'Edited', 'URL'];
  return (
    <div>
      <h1>Tabela de Planetas - Star Wars - Trybe</h1>
      { data.length > 0
        ? (
          <table>
            <thead>
              <tr>
                { thContent.map((headName) => <th key={ headName }>{ headName }</th>) }
              </tr>
            </thead>
            <tbody>
              { data.map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate}</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain}</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              )) }
            </tbody>
          </table>) : 'Loading...'}
    </div>
  );
}

// A tabela foi criada com auxílio de Chris Blakely em https://www.youtube.com/watch?v=dYjdzpZv5yc

export default Table;
