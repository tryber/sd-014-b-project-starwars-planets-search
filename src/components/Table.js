import React, { useContext, useEffect, useState } from 'react';
import PlanetApiContext from '../context/PlanetContext';
import HeaderTable from './HeaderTable';
import Header from './Header';
import TableBody from './TableBody';

function Table() {
  const { dataPlanet } = useContext(PlanetApiContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (dataPlanet.length > 0) {
      setIsLoading(true);
    }
  }, [dataPlanet]);

  return (
    <div>
      <Header />
      <table>
        <thead>
          <HeaderTable />
        </thead>
        <tbody>
          {isLoading && dataPlanet
            .map((planet, index) => <TableBody key={ index } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
