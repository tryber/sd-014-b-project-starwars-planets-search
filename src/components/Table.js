import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import TableHeader from './TableHeader';
import TableRows from './TableRows';

const Table = () => {
  const { data, filters } = useContext(StarWarsContext);

  const filter = () => {
    const { filterByName: { name } } = filters;
    return data.filter((planet) => planet.name.includes(name));
  };

  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        { filter().map((planet, index) => (
          <TableRows key={ index } planet={ planet } />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
