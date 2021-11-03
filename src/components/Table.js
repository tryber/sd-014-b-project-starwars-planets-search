import React, { useContext, useEffect } from 'react';
import './table.css';
import DataContext from '../context/DataContext';

function Table() {
  const { data, fetchRequestApiPlanets } = useContext(DataContext);

  useEffect(() => {
    fetchRequestApiPlanets();
    console.log(data);
  }, []);

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
          {data.lengt < 0 ? <p>Carregando</p>
            : data.map((planeta) => (
              <tr key={ planeta.name }>
                <td>{planeta.name}</td>
                <td>{planeta.rotation_period}</td>
                <td>{planeta.orbital_period}</td>
                <td>{planeta.diameter}</td>
                <td>{planeta.climate}</td>
                <td>{planeta.gravity}</td>
                <td>{planeta.terrain}</td>
                <td>{planeta.surface_water}</td>
                <td>{planeta.population}</td>
                <td>{planeta.films}</td>
                <td>{planeta.created}</td>
                <td>{planeta.edited}</td>
                <td>{planeta.url}</td>
              </tr>))}
        </tbody>
      </table>
    </div>

  );
}

export default Table;
