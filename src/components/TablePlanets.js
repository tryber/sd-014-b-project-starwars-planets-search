import React, { useContext } from 'react';
import NewContext from '../context/NewContext';

function TablePlanets() {
  const { filterPlanets, titlePlanets } = useContext(NewContext);
  return (
    <table cellPadding="5px" cellSpacing="0">
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
            { Object.values(planet).map((value, index) => (
              <td data-testid={ index === 0 && 'planet-name' } key={ index }>
                { value }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablePlanets;
