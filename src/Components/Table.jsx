import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Table() {
  const { data } = useContext(MyContext);

  const TH = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Create', 'Edited', 'Url'];

  return (
    <table>
      <thead>
        <tr>
          { TH.map((name, i) => (
            <th key={ i }>{ name }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, i) => (
          <tr key={ i } index={ i }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td><a href={ planet.films }>{ planet.films }</a></td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td><a href={ planet.url }>{ planet.url }</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
