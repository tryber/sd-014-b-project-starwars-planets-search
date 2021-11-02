import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { data, filteredData } = useContext(AppContext);
  const tableHead = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Create', 'Edited', 'Url'];

  function handleFiltered() {
    return (
      filteredData
        .map((eachPlanet) => (
          <tr key={ eachPlanet.name }>
            <td>
              {eachPlanet.name}
            </td>
            <td>
              {eachPlanet.rotation_period}
            </td>
            <td>
              {eachPlanet.orbital_period}
            </td>
            <td>
              {eachPlanet.diameter}
            </td>
            <td>
              {eachPlanet.climate}
            </td>
            <td>
              {eachPlanet.gravity}
            </td>
            <td>
              {eachPlanet.terrain}
            </td>
            <td>
              {eachPlanet.surface_water}
            </td>
            <td>
              {eachPlanet.population}
            </td>
            <td>
              {eachPlanet.films}
            </td>
            <td>
              {eachPlanet.created}
            </td>
            <td>
              {eachPlanet.edited}
            </td>
            <td>
              {eachPlanet.url}
            </td>
          </tr>
        ))
    );
  }

  return (
    <div>
      <table key="planet-table">
        <tbody>
          <tr>
            {tableHead.map((eachKey) => <th key={ eachKey }>{eachKey}</th>)}
          </tr>
          {
            filteredData.length === 0
              ? data
                .map((eachPlanet) => (
                  <tr key={ eachPlanet.name }>
                    <td>
                      {eachPlanet.name}
                    </td>
                    <td>
                      {eachPlanet.rotation_period}
                    </td>
                    <td>
                      {eachPlanet.orbital_period}
                    </td>
                    <td>
                      {eachPlanet.diameter}
                    </td>
                    <td>
                      {eachPlanet.climate}
                    </td>
                    <td>
                      {eachPlanet.gravity}
                    </td>
                    <td>
                      {eachPlanet.terrain}
                    </td>
                    <td>
                      {eachPlanet.surface_water}
                    </td>
                    <td>
                      {eachPlanet.population}
                    </td>
                    <td>
                      {eachPlanet.films}
                    </td>
                    <td>
                      {eachPlanet.created}
                    </td>
                    <td>
                      {eachPlanet.edited}
                    </td>
                    <td>
                      {eachPlanet.url}
                    </td>
                  </tr>
                )) : handleFiltered()
          }
        </tbody>
      </table>
    </div>);
}

export default Table;
