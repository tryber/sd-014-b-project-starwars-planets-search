import React from 'react';

const filterBiggenThen = (data, method) => {
  const { column, value } = method;

  const dataFilter = () => {
    if (column === 'population') {
      return data
        .filter((e) => Number(e.population) > value && e.population !== 'unknown');
    }
    if (column === 'orbital_period') {
      return data
        .filter((e) => Number(e.orbital_period) > value);
    }
    if (column === 'diameter') {
      return data.filter((e) => Number(e.diameter) > value);
    }
    if (column === 'rotation_period') {
      return data
        .filter((e) => Number(e.rotation_period) > value);
    }
    if (column === 'surface_water') {
      return data
        .filter((e) => Number(e.surface_water) > value);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Rotation</th>
          <th>Orbital</th>
          <th>Diamanter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      {
        dataFilter().map((
          { name, population, rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod, diameter,
            climate, gravity, terrain, surface_water: surfaceWater, films,
            created, edited, url }, index,
        ) => (
          <tbody key={ index }>
            <tr>
              <td>{name}</td>
              <td>{population}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          </tbody>
        ))
      }
    </table>
  );
};

export default filterBiggenThen;
