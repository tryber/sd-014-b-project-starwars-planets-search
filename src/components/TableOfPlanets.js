import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
import '../styles/Table.css';

function TableOfPlanets() {
  const { planets, filterByName } = useContext(planetsContext);
  const planetsFiltered = planets
    .filter((planet) => planet.name.toLowerCase()
      .includes(filterByName.name.toLowerCase()));
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
      { planetsFiltered.map((planet, index) => (
        <tr key={ index }>
          <td className="column" key={ planet.name }>{ planet.name }</td>
          <td
            className="column"
            key={ planet.rotation_period }
          >
            { planet.rotation_period }
          </td>
          <td
            className="column"
            key={ planet.orbital_period }
          >
            { planet.orbital_period }
          </td>
          <td
            className="column"
            key={ planet.diameter }
          >
            { planet.diameter }
          </td>
          <td className="column" key={ planet.climate }>{ planet.climate }</td>
          <td className="column" key={ planet.gravity }>{ planet.gravity }</td>
          <td className="column" key={ planet.terrain }>{ planet.terrain }</td>
          <td
            className="column"
            key={ planet.surface_water }
          >
            { planet.surface_water }
          </td>
          <td
            className="column"
            key={ planet.population }
          >
            { planet.population }
          </td>
          <td className="column" key={ planet.films }>{ planet.films }</td>
          <td className="column" key={ planet.created }>{ planet.created }</td>
          <td className="column" key={ planet.edited }>{ planet.edited }</td>
          <td className="column" key={ planet.url }>{ planet.url }</td>
        </tr>
      )) }
    </table>
  );
}

export default TableOfPlanets;
