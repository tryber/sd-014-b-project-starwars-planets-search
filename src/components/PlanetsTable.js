import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function PlanetsTable() {
  const { data } = useContext(DataContext);
  const tableTitles = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((item) => <th key={ item }>{ item }</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            <td key={ planet.name }>{planet.name}</td>
            <td key={ planet.rotation_period }>{planet.rotation_period}</td>
            <td key={ planet.orbital_period }>{planet.orbital_period}</td>
            <td key={ planet.diameter }>{planet.diameter}</td>
            <td key={ planet.climate }>{planet.climate}</td>
            <td key={ planet.gravity }>{planet.gravity}</td>
            <td key={ planet.terrain }>{planet.terrain}</td>
            <td key={ planet.surface_water }>{planet.surface_water}</td>
            <td key={ planet.population }>{planet.population}</td>
            <td key={ planet.films }>{planet.films}</td>
            <td key={ planet.created }>{planet.created}</td>
            <td key={ planet.edited }>{planet.edited}</td>
            <td key={ planet.url }>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanetsTable;
