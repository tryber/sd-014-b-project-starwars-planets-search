import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import Header from './Header';
import Body from './Body';
import FilteredBody from './FilteredBody';

function Table() {
  const { filters: { filterByName } } = useContext(PlanetContext);

  return (
    <table>
      <Header />
      {
        filterByName.length
          ? <FilteredBody />
          : <Body />
      }
    </table>
  );
}

export default Table;
