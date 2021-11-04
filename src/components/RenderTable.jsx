import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../provider/Provider';
import compare from '../services';

function RenderTable() {
  const { filter, data, column, value, comparison } = useContext(SearchContext);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const newArray = [...data]
      .filter(({ name }) => (name.toLowerCase().includes(filter.toLowerCase())))
      .filter((e) => compare(e[column], comparison, value));
    setFiltered(newArray);
  }, [data, filter, column, comparison, value]);

  function renderRow({ name, rotation_period: rotation, orbital_period: orbital, diameter,
    climate, gravity, terrain, surface_water: water, population,
    films, created, edited, url }) {
    return (
      <tr key={ name }>
        <td>{name}</td>
        <td>{rotation}</td>
        <td>{orbital}</td>
        <td>{diameter}</td>
        <td>{climate}</td>
        <td>{gravity}</td>
        <td>{terrain}</td>
        <td>{water}</td>
        <td>{population}</td>
        <td>{films}</td>
        <td>{created}</td>
        <td>{edited}</td>
        <td>{url}</td>
      </tr>
    );
  }

  return (
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
      <tbody>
        {
          filtered
            .map((e) => renderRow(e))
        }
      </tbody>
    </table>
  );
}

export default RenderTable;
