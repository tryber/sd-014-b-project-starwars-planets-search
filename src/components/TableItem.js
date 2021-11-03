import React from 'react';
import PropsTypes from 'prop-types';

function TableItem(props) {
  const { planet } = props;

  return (
    <tr>
      <td>{ planet.name }</td>
      <td>{ planet.rotation_period }</td>
      <td>{ planet.orbital_period }</td>
      <td>{ planet.diameter }</td>
      <td>{ planet.climate }</td>
      <td>{ planet.gravity }</td>
      <td>{ planet.terrain }</td>
      <td>{ planet.surface_water }</td>
      <td>{ planet.population }</td>
      <td>{ planet.films }</td>
      <td>{ planet.created }</td>
      <td>{ planet.edited }</td>
      <td>{ planet.url }</td>
    </tr>
  );
}

TableItem.propTypes = {
  planet: PropsTypes.shape({
    name: PropsTypes.string,
    rotation_period: PropsTypes.string,
    orbital_period: PropsTypes.string,
    diameter: PropsTypes.string,
    climate: PropsTypes.string,
    gravity: PropsTypes.string,
    terrain: PropsTypes.string,
    surface_water: PropsTypes.string,
    population: PropsTypes.string,
    films: PropsTypes.arrayOf(PropsTypes.string),
    created: PropsTypes.string,
    edited: PropsTypes.string,
    url: PropsTypes.string,
  }).isRequired,
};

export default TableItem;
