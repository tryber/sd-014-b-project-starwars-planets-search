import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TablePlanets() {
  const { data, filters } = useContext(PlanetsContext);

  const tableHeaders = [
    'Name', 'Rotation Period',
    'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL',
  ];

  const filter = () => {
    const { filterByName: { name } } = filters;
    return data.filter((planet) => planet.name.includes(name));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            { tableHeaders.map((header) => <th key={ header }>{ header }</th>) }
          </tr>
        </thead>
        <tbody>
          { filter().map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default TablePlanets;
