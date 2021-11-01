import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import '../styles/Table.css';

function TableOfPlanets() {
  const { planets } = useContext(planetsContext);
  /* const headerTable = [
    'Name', 'Rotation Period',
    'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain',
    'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'Url',
  ]; */
  return (
    <table>
      <tr>.</tr>
      <th>Name</th>
      <th>Rotation period</th>
      <th>Orbital period</th>
      <th>Diameter</th>
      <th>Climate</th>
      <th>Gravity</th>
      <th>Terrain</th>
      <th>Surface Water</th>
      <th>Population</th>
      <th>Films</th>
      <th>Created</th>
      <th>Edited</th>
      <th>Url</th>
      { planets.map((planet, index) => (
        <tr key={ index }>
          <td className="column" key={ index }>{ planet.name }</td>
          <td
            className="column"
            key={ index }
          >
            { planet.rotation_period }
          </td>
          <td
            className="column"
            key={ index }
          >
            { planet.orbital_period }
          </td>
          <td
            className="column"
            key={ index }
          >
            { planet.diameter }
          </td>
          <td className="column" key={ index }>{ planet.climate }</td>
          <td className="column" key={ index }>{ planet.gravity }</td>
          <td className="column" key={ index }>{ planet.terrain }</td>
          <td
            className="column"
            key={ index }
          >
            { planet.surface_water }
          </td>
          <td
            className="column"
            key={ index }
          >
            { planet.population }
          </td>
          <td className="column" key={ index }>{ planet.films }</td>
          <td className="column" key={ index }>{ planet.created }</td>
          <td className="column" key={ index }>{ planet.edited }</td>
          <td className="column" key={ index }>{ planet.url }</td>
        </tr>
      )) }
    </table>
  );
}

export default TableOfPlanets;
