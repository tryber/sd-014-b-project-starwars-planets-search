import React from 'react';
import './table.css';

// campo chamado data do contexto

function Table() {
  return (
    <div>
      <table border="1" className="table">
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
          <tr><td>cecilia</td></tr>
        </tbody>
      </table>
    </div>

  );
}

export default Table;
