import React, { useContext } from 'react';
import NewContext from '../context/NewContext';
import TablePlanets from './TablePlanets';
import FilterName from './FilterName';
import FilterNumbers from './FilterNumbers';
import FilterOrder from './FilterOrder';
import './Planets.css';

function Planets() {
  const { loading } = useContext(NewContext);
  return (
    <div>
      <h1>Star Wars Project</h1>
      <FilterName />
      <FilterNumbers />
      <FilterOrder />
      {loading ? null
        : <TablePlanets />}
    </div>
  );
}

export default Planets;
