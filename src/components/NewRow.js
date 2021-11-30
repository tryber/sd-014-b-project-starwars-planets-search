import React from 'react';
import PropTypes from 'prop-types';

function NewRow({ elements }) {
  return (
    <tr>
      <td data-testid="planet-name">{ elements.name }</td>
      <td>{ elements.rotation_period }</td>
      <td>{ elements.orbital_period }</td>
      <td>{ elements.diameter }</td>
      <td>{ elements.climate }</td>
      <td>{ elements.gravity }</td>
      <td>{ elements.terrain }</td>
      <td>{ elements.surface_water }</td>
      <td>{ elements.population }</td>
      <td>{ elements.films.map((element) => element) }</td>
      <td>{ elements.created }</td>
      <td>{ elements.edited }</td>
      <td>{ elements.url }</td>
    </tr>
  );
}

NewRow.propTypes = {
  elements: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.number,
    orbital_period: PropTypes.number,
    diameter: PropTypes.number,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.number,
    population: PropTypes.number,
    films: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default NewRow;
