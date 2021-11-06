import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Table() {
  const { dataFilter } = useContext(MyContext);

  const tableHead = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Create', 'Edited', 'Url'];

  return (
    <table align="center">
      <tbody>
        <tr>
          { tableHead.map((val, i) => (
            <th key={ i }>{ val }</th>
          ))}
        </tr>
        {dataFilter.map((val, i) => (
          <tr key={ i }>
            <td>{ val.name }</td>
            <td>{ val.rotation_period }</td>
            <td>{ val.orbital_period }</td>
            <td>{ val.diameter }</td>
            <td>{ val.climate }</td>
            <td>{ val.gravity }</td>
            <td>{ val.terrain }</td>
            <td>{ val.surface_water }</td>
            <td>{ val.population }</td>
            <td><a href={ val.films }>{ val.films }</a></td>
            <td>{ val.created }</td>
            <td>{ val.edited }</td>
            <td><a href={ val.url }>{ val.url }</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
