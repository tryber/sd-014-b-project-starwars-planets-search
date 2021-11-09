import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const tableHeadings = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
  'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

export default function Table() {
  const { data } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          { tableHeadings.map((heading) => (
            <th key={ heading }>{heading}</th>
          )) }
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
        )) }
      </tbody>
    </table>
  );
}
