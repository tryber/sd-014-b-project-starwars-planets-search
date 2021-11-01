import React from 'react';
import TableContext from './TableContext';
import getPlanets from '../services/starWarsApi';

async function TableProvider({ children }) {
  const data = await getPlanets();

  return (
    <TableContext.Provider value={ data }>
      {children}
    </TableContext.Provider>
  );
}

export default TableProvider;
