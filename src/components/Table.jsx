import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { isLoading, data } = useContext(AppContext);

  function mapPlanets() {
    return (
      <div>
        <table key="planet-table">
          {
            data
              .map((eachPlanet) => (
                <>
                  <tr>
                    {Object.keys(eachPlanet)
                      .filter((isResident) => isResident !== 'residents')
                      .map((eachKey) => <th key={ `${eachKey} chave` }>{eachKey}</th>)}
                  </tr>
                  <tr>
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
                </>
              ))
          }
        </table>
      </div>);
  }

  return (
    isLoading ? ''
      : mapPlanets()
  );
}

export default Table;
