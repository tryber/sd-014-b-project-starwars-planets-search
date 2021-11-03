import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const { data, searchTerm } = useContext(PlanetsContext);
  const categories = [
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
    'Created',
    'Edited',
    'Url',
  ];

  // https://www.youtube.com/watch?v=OlVkYnVXPl0 <- Insane Filter

  const ONE = -1;
  const filteredData = data.filter(
    (planet) => planet.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== ONE,
  );

  const renderedCategories = categories.map((header, index) => (
    <th key={ index }>{header}</th>
  ));

  const renderedPlanets = filteredData.map((planet, index) => (
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
  ));

  return (
    <table>
      <thead>
        <tr>{renderedCategories}</tr>
      </thead>
      <tbody>{renderedPlanets}</tbody>
    </table>
  );
}
