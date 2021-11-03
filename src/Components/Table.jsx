import React, { useContext } from 'react';

import { MyContext } from '../Context/MyContext';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table() {
  const { data } = useContext(MyContext);

  return (
    <div className="table-container">
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { data.map((planet, key) => <TableRow key={ key } planet={ planet } />) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
