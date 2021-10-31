import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function TableOfPlanets() {
  const { planets } = useContext(planetsContext);
  const headerTable = [
    'Name', 'Rotation Period',
    'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain',
    'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'Url',
  ];
  return (
    <table>
      { headerTable.map((title, index) => <th key={ index }>{ title }</th>) }
      { planets.map((planet, index) => (
        <tbody key={ index }>
          <th key={ index }>{ planet.name }</th>
          <th key={ index }>{ planet.rotation_period }</th>
          <th key={ index }>{ planet.orbital_period }</th>
          <th key={ index }>{ planet.diameter }</th>
          <th key={ index }>{ planet.climate }</th>
          <th key={ index }>{ planet.gravity }</th>
          <th key={ index }>{ planet.terrain }</th>
          <th key={ index }>{ planet.surface_water }</th>
          <th key={ index }>{ planet.population }</th>
          <th key={ index }>{ planet.films }</th>
          <th key={ index }>{ planet.created }</th>
          <th key={ index }>{ planet.edited }</th>
          <th key={ index }>{ planet.url }</th>
        </tbody>
      )) }
    </table>
  );
}

export default TableOfPlanets;
