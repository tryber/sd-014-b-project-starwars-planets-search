import PropTypes from 'prop-types';
import React from 'react';

export default function TableRow({ planet }) {
  const {
    climate,
    created,
    diameter,
    edited,
    films,
    gravity,
    name,
    orbital_period: orbitalPeriod,
    population,
    rotation_period: rotationPeriod,
    surface_water: surfaceWater,
    terrain,
    url,
  } = planet;
  return (
    <tr>
      <td>{ name }</td>
      <td>{ rotationPeriod }</td>
      <td>{ orbitalPeriod }</td>
      <td>{ diameter }</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surfaceWater }</td>
      <td>{ population }</td>
      <td>{ films }</td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
