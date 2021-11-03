import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { planets, loading } = useContext(PlanetsContext);
  // const columnKeys = Object.keys(planets);

  return (
    <div>
      <table>
        { planets.map((column) => <th key={ column }>{ column }</th>) }
      </table>
    </div>
  );
}

export default Table;
