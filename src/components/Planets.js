import React, { useContext } from 'react';
import NewContext from '../context/NewContext';
import TablePlanets from './TablePlanets';
import FilterName from './FilterName';
import FilterNumbers from './FilterNumbers';

function Planets() {
  const { loading } = useContext(NewContext);
  return (
    <div>
      <FilterName />
      <FilterNumbers />
      {loading ? null
        : <TablePlanets />}
    </div>
  );
}

export default Planets;
