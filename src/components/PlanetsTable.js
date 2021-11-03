import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function PlanetsTable() {
  const { planetsList } = useContext(PlanetsContext);

  return (
    <div>
      { planetsList }
    </div>
  );
}

export default PlanetsTable;
