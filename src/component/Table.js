import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import HeaderInput from './HeaderInput';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';
import FilterValue from './FilterValue';

function Table() {
  const { data } = useContext(PlanetContext);

  return (
    <div>
      <HeaderInput />
      <ColumnFilter />
      <ComparisonFilter />
      <FilterValue />
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
          {
            data.map((planet, index) => (
              <tr key={ index }>
                {
                  Object.values(planet).map((values, indx) => (
                    <td key={ indx }>
                      {values}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
// Consultei o esse repositorio para realização do map e Object.values
// com objetivo de criar a parte inferior da tabela de forma dinâmica
// https://github.com/tryber/sd-013-b-project-starwars-planets-search/commit/76fb97947ec80e70578e4c8121fa4558d4344ede
