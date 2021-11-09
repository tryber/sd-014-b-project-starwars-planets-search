import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import Header from './Header';
import Body from './Body';
import FilteredBody from './FilteredBody';
import FilteredByNum from './FilteredByNum';

function Table() {
  const { filters: { filterByName, filterByNumericValues } } = useContext(PlanetContext);

  function renderBody() {
    if (!filterByName.length && !filterByNumericValues.length) return (<Body />);

    if (filterByName.length) return (<FilteredBody />);
    if (filterByNumericValues.length) return (<FilteredByNum />);
  }

  return (
    <table>
      <Header />
      {renderBody()}
    </table>
  );
}

export default Table;
