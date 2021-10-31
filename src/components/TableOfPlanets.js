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
      { planets.map((planet, index) => <tr key={ index }>{ planet.name }</tr>) }
    </table>
  );
}

export default TableOfPlanets;
