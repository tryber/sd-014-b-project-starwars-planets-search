import React from 'react';
import PropTypes from 'prop-types';

const TableRows = ({ planet }) => {
  const {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    edited,
    url,
  } = planet;

  return (
    <tr>
      <td header="name">{ name }</td>
      <td header="rotation_period">{ rotationPeriod }</td>
      <td header="orbital_period">{ orbitalPeriod }</td>
      <td header="diameter">{ diameter }</td>
      <td header="climate">{ climate }</td>
      <td header="gravity">{ gravity }</td>
      <td header="terrain">{ terrain }</td>
      <td header="surface_water">{ surfaceWater }</td>
      <td header="population">{ population }</td>
      <td header="films">{ films }</td>
      <td header="created">{ created }</td>
      <td header="edited">{ edited }</td>
      <td header="url">{ url }</td>
    </tr>
  );
};

export default TableRows;

TableRows.propTypes = {
  planet: PropTypes.objectOf(PropTypes.any).isRequired,
};
