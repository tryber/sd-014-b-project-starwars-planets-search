import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data } = useContext(PlanetContext);
  if (data.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotatio Period</th>
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
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          (// https://github.com/tryber/sd-013-b-project-starwars-planets-search/commit/76fb97947ec80e70578e4c8121fa4558d4344ede)
          {
            data.map((planet, index) => (
              <tr key={ index }>
                {
                  Object.values(planet).map((name, indx) => (
                    <td key={ indx }>
                      {name}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
  return (
    <span>Loading</span>
  );
}

export default Table;
