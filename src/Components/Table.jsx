import React from 'react';
import { usePlanets } from '../context/usePlanets';

const Table = () => {
  const {
    filters: {
      filterByName,
    },
    planets,
  } = usePlanets();

  const renderData = () => (
    planets
      .filter(({ name }) => (
        name.includes(filterByName.name)
      )).map((planet, index) => (
        <tr key={ index }>
          <td data-testid="planet-name">{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films[0] }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>
      ))
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período Rotacional</th>
          <th>Perídio Orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água Superficial</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Data de Criação</th>
          <th>Data de Edição</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  );
};
export default Table;
