import React, { useState } from 'react';
import useContexto from '../Context/Provider';

function Table() {
  const TWO = -1;
  const [nam3, setName] = useState('');
  const { allPlanets } = useContexto();
  const planets = allPlanets;

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const filteredPlanets = planets.filter(
    (data) => data.name.toLowerCase().indexOf(nam3.toLowerCase()) !== TWO,
  );
  return (
    <div>
      <input
        type="text"
        value={ nam3 }
        onChange={ handleChange }
        placeholder="Search"
        data-testid="name-filter"
      />
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
        {filteredPlanets.map((planet, index) => (
          <tbody key={ index }>
            <tr>
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
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
