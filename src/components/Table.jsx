import React, { useContext } from 'react';
import tableContext from '../context/tableContext';
import Header from './Header';
import TableLine from './TableLine';

export default function Table() {
  const { data: { results } } = useContext(tableContext);

  return (
    <table>
      <Header results={ results } />
      {results
        ? results.map((item, index) => <TableLine key={ index } item={ item } />)
        : <span />}
    </table>
  );
}
