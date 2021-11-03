import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planetsData } = useContext(PlanetContext);

  const tableHead = () => (Object.keys(planetsData[0]).map((header, index) => (
    <th key={ index }>
      { header }
    </th>
  )));

  const tableBody = () => (
    planetsData.map((planet, index) => (
      <tr key={ index }>
        {Object.values(planet).map((value, idx) => (
          <td key={ idx }>
            { value }
          </td>
        ))}
      </tr>
    ))
  );

  if (planetsData.length === 0) return (<span> Carregando ... </span>);
  /* Consultei o repositório do Rafael Perches para realizar a lógica  do tableHead e tableBody
  link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/10/commits/f0c8ad8b373f0ab69d556818afcea2075fc12e77 */

  return (
    <table>
      <thead>
        <tr>
          {tableHead()}
        </tr>

      </thead>
      <tbody>
        <td>
          {tableBody()}
        </td>
      </tbody>
      <td />
    </table>
  );
}
export default Table;
