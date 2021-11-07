import React, { useContext, useEffect, useState } from 'react';
import tableContext from '../context/tableContext';
import Header from './Header';
import TableLine from './TableLine';

export default function Table() {
  const { data: { results },
    filters: { filterByName: { name },
      filterByNumericValues: [{ column, comparison, value }] },
  } = useContext(tableContext);

  const [table, changeTable] = useState([]);

  const filterByName = (itemName) => itemName.includes(name);

  const filterByNumericValues = (ItemValue) => {
    switch (comparison) {
    case 'maior que': return (ItemValue > value);
    case 'menor que': return (ItemValue < value);
    case 'igual a': return (ItemValue === value);
    default: return true;
    }
  };

  useEffect(() => {
    const newTable = results.map((item, index) => {
      if (filterByName(item.name) && filterByNumericValues(item[column])) {
        return <TableLine key={ index } item={ item } />;
      } return <span key={ index } />;
    });
    changeTable(newTable);
  }, [results, name, comparison, column, value]);

  return (
    <table>
      <Header results={ results } />
      { table }
    </table>
  );
}
