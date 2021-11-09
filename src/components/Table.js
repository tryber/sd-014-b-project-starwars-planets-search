import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = () => {
  const { filtered } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        { filtered.map((planet, index) => (
          <TableRow key={ index } planet={ planet } />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
