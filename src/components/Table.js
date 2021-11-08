import React, { useContext } from 'react';
import PlanetsContext from '../context/Context';

const planetsName = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Residents',
  'Films',
  'Created',
  'Edited',
];

function Table() {
  const { response, nameFilter: { filters } } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            { planetsName.map((index) => <th key={ index }>{index}</th>) }
          </tr>
        </thead>
        <tbody>
          { response.filter((
            value,
          ) => value.name.toLowerCase().includes(name.toLowerCase()))
            .map((index, planet) => (
              <tr key={ planet }>
                <td>{ index.name }</td>
                <td>{ index.rotation_period }</td>
                <td>{ index.orbital_period }</td>
                <td>{ index.diameter }</td>
                <td>{ index.climate }</td>
                <td>{ index.gravity }</td>
                <td>{ index.terrain }</td>
                <td>{ index.surface_water }</td>
                <td>{ index.population }</td>
                <td>{ index.residents.length }</td>
                <td>{ index.films.length }</td>
                <td>{ index.created }</td>
                <td>{ index.edited }</td>
              </tr>
            )) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
