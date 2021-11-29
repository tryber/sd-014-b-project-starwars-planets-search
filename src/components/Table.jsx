import React from 'react';

const tHeadColumns = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          { tHeadColumns.map((header) => (
            <th key={ header }>{ header }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
