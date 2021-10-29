import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const tableHeaders = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
  'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

export default function Table() {
  const { planetsFilter } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          { tableHeaders.map((header) => (
            <th key={ header }>{header}</th>
          )) }
        </tr>
      </thead>
      {/* { map abaixo feito com ajuda do github copilot } */}
      <tbody>
        { planetsFilter.map((planet) => (
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
        )) }
      </tbody>
    </table>
  );
}
