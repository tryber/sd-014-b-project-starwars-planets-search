import React, { useContext } from 'react';
import DataContext from '../context/Context';

const tableThs = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
  'Gravity', 'Terrain', 'Surface Water', 'Population', ' Films', 'Created', 'Edited',
  'URL'];

const Table = () => {
  const { planets } = useContext(DataContext);
  return (
    <table>
      <thead>
        <tr>
          { tableThs.map((text) => <th key={ text }>{text}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default Table;
