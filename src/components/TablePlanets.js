import React, { useContext } from 'react';
import NewContext from '../context/NewContext';

function TablePlanets() {
  const { filterPlanets, titlePlanets } = useContext(NewContext);
  return (
    <table>
      <thead>
        <tr>
          {titlePlanets.map((key) => (
            <th key={ key }>{key.replace('_', ' ').toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { filterPlanets.length > 0 ? null
          : <tr><td>Nenhum planeta encontrado</td></tr>}
        {filterPlanets.map((planet) => (
          <tr key={ planet.name }>
            { Object.values(planet).map((value) => (
              <td key={ value }>{ value }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablePlanets;
