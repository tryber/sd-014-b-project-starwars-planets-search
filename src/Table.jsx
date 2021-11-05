import React, { useContext } from 'react';
import AppContext from './Context';

function Table() {
  const { filtred } = useContext(AppContext);

  const tableHead = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Create', 'Edited', 'Url'];

  return (
    <table align="center">
      <tbody>
        <tr>
          {tableHead.map((element, index) => (
            <th key={ index }><b>{ element }</b></th>
          ))}
        </tr>
        {filtred.map((element, index) => (
          <tr key={ index }>
            <td>{ element.name }</td>
            <td>{ element.rotation_period }</td>
            <td>{ element.orbital_period }</td>
            <td>{ element.diameter }</td>
            <td>{ element.climate }</td>
            <td>{ element.gravity }</td>
            <td>{ element.terrain }</td>
            <td>{ element.surface_water }</td>
            <td>{ element.population }</td>
            <td><a href={ element.films }>{ element.films }</a></td>
            <td>{ element.created }</td>
            <td>{ element.edited }</td>
            <td><a href="element.url">{ element.url }</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
