import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TableRow from './TableRow';

export default function Table() {
  const { planets, filtered, searchState } = useContext(AppContext);
  const tableArray = searchState.filters.filterByName === '' ? planets : filtered;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { tableArray && tableArray
            .map((planet, index) => <TableRow key={ index } planet={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
