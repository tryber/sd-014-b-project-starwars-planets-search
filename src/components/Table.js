import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const tableHeaders = ['Name', 'Rotation Period', 'Orbital Period',
  'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
  'Population', 'Films', 'Created', 'Edited', 'URL'];

function Table() {
  const { planet } = useContext(PlanetContext);
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((item, index) => (
            <th key={ index }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planet.map((item, index) => (
          <tr key={ index }>
            <td key={ index }>{ item.name }</td>
            <td key={ index }>{ item.rotation_period }</td>
            <td key={ index }>{ item.orbital_period }</td>
            <td key={ index }>{ item.diameter }</td>
            <td key={ index }>{ item.climate }</td>
            <td key={ index }>{ item.gravity }</td>
            <td key={ index }>{ item.terrain }</td>
            <td key={ index }>{ item.surface_water }</td>
            <td key={ index }>{ item.population }</td>
            <td key={ index }>{ item.films }</td>
            <td key={ index }>{ item.created }</td>
            <td key={ index }>{ item.edited }</td>
            <td key={ index }>{ item.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
