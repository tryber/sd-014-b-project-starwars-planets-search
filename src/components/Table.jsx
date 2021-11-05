import React, { useContext } from 'react';
import { TABLE_HEAD } from '../helper/data';
import { PlanetsContext } from '../context/PlanetsProvider';

function Table() {
  const { data } = useContext(PlanetsContext);
  return (
    <table>
      <thead>
        <tr>
          { TABLE_HEAD.map((item, ind) => <th key={ `th${ind}` }>{ item }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.length > 0 && data.map((planet, ind) => {
          delete planet.residents;
          return (
            <tr key={ `tr${ind}` }>
              { Object.values(planet)
                .map((info, i) => <td key={ `td${ind}${i}` }>{ info }</td>) }
            </tr>);
        }) }
      </tbody>
    </table>
  );
}

export default Table;
