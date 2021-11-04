import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';
import Header from './Header';
import TableLine from './TableLine';

export default function Table() {
  const { data: { results },
    filters: { filterByName: { name } } } = useContext(tableContext);

  const [table, changeTable] = useState([]);

  const filterByName = (itemName) => itemName.includes(name);

  useEffect(() => {
    const newTable = results.map((item, index) => {
      if (filterByName(item.name)) {
        return <TableLine key={ index } item={ item } />;
      } return <span key={ index } />;
    });
    changeTable(newTable);
  }, [results, name]);

  return (
    <table>
      <Header results={ results } />
      { table }
    </table>
  );
}
