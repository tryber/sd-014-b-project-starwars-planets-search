import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './table.css';

const thead = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Criado',
  'Editado',
  'Url',
];

export default function Table() {
  const planets = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          {thead.map((h) => <th key={ h }>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => (
          <tr key={ index }>
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
}
