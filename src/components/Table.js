import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import TableHeader from './TableHeader';
import TableRows from './TableRows';

const Table = () => {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        { data.map((planet, index) => (
          <TableRows key={ index } planet={ planet } />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
