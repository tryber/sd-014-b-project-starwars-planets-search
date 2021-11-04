import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableItem from './TableItem';

function PlanetsTable() {
  const { toShowPlanetsList, fetchPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { toShowPlanetsList.map((planet, index) => (
          <TableItem key={ index } planet={ planet } />
        )) }
      </tbody>
    </table>
  );
}

export default PlanetsTable;
