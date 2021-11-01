import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';

function TableStarWars() {
  const { data, keys } = useContext(StarWarsContext);
  return (
    <table>
      <thead>
        <tr>
          {keys.map((title) => <th key={ title }>{ title }</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((element, index) => (
          <tr key={ index }>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableStarWars;
