import React, { useContext } from 'react';
import NewContext from '../context/NewContext';
// import getDataByPlanets from '../services/ApiPlanets';

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
        { filterPlanets.length > 0 ? null : <p>Nenhum planeta encontrado</p>}
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
