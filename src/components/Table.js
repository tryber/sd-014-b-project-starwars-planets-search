import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
// import { useTable } from 'react-table';

const Table = () => {
  const { createColumns } = useContext(PlanetsContext);
  return (
    <div>
      <thead>
        { createColumns.map((head) => {
          <th>{ head }</th>
        }) }
      </thead>
    </div>
  )
};

export default Table;
