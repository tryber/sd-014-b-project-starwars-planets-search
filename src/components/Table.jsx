import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import tableHeaders from '../services/tableHedersData';

function Table() {
  const { planets } = useContext(PlanetContext);
  // acessa os valores setados no provider e repassados para o context
  // "planets" veio do retorno da API (que é chamada para armazenamento no provider)
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((item, index) => (
            <th key={ index }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => ( // faz o map das informaçoes da API
        // e retorna o que se deseja atraves do dot "."
          <tr key={ index }>
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
        ))}
      </tbody>
    </table>
  );
}

export default Table;
