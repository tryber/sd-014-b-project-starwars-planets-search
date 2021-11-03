import React, { useContext, useEffect } from 'react';
import './table.css';
import DataContext from '../context/DataContext';

function Table() {
  const { data, fetchRequestApiPlanets } = useContext(DataContext);
  useEffect(() => {
    fetchRequestApiPlanets();
  }, []);
  console.log(data);
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
          <tr>
            <td>Name</td>
            <td>Rotation</td>
            <td>Orbital</td>
            <td>Diameter</td>
            <td>Climate</td>
            <td>Gravity</td>
            <td>Terrain</td>
            <td>Surface</td>
            <td>Population</td>
            <td>Films</td>
            <td>Created</td>
            <td>Edited</td>
            <td>URL</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Table;
