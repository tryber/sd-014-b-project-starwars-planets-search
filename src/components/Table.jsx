import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Table() {
  const { tableHeaders, planets } = useContext(StarwarsContext);

  return (
    <table>
      <thead>
        <tr>
          { tableHeaders.map((header) => (
            <th key={ header }>{ header }</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ planet.name }>
            { Object.values(planet).map((value) => <td key={ value }>{ value }</td>) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
