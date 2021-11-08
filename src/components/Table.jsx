import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import SearchInput from './SearchInput';
import Filters from './Filters';

function Table() {
  const { planetsData } = useContext(PlanetContext);

  const tableHead = () => (Object.keys(planetsData[0]).map((header, index) => (
    <th key={ index }>
      {header}
    </th>
  )));

  const tableBody = () => (
    planetsData.map((planet, index) => (
      <tr key={ index }>
        {Object.values(planet).map((value, idx) => (
          <td key={ idx }>
            {value}
          </td>
        ))}
      </tr>
    ))

  );

  function table() {
    return (
      <table>
        <thead>
          <tr>
            {tableHead()}
          </tr>
        </thead>

        <tbody>
          {planetsData.length > 0
            ? tableBody()
            : <tr><td>Planeta não encontrado.</td></tr>}
        </tbody>
      </table>
    );
  }

  /* Consultei o repositório do Rafael Perches para realizar a lógica  do tableHead e tableBody
  link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/10/commits/f0c8ad8b373f0ab69d556818afcea2075fc12e77 */

  return (
    <section>
      <SearchInput />
      <Filters />
      {
        planetsData.length === 0
          ? <span> Carregando ... </span>
          : table()
      }
    </section>
  );
}
export default Table;
