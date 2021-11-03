import React from 'react';

import PropTypes from 'prop-types';

function TableRow({ planet }) {
  /* const {
    name,rotation_period: rotationPeriod, orbital_period: orbitalPeriod,
    diameter, climate, gravity, terrain, surface_water: surfaceWater,
    population, films, created, edited, url
  } = planet; */

  return (
    <tr>
      <td>
        { planet.name }
      </td>
      <td>
        { planet.rotation_period }
      </td>
      <td>
        { planet.orbital_period }
      </td>
      <td>
        { planet.diameter }
      </td>
      <td>
        { planet.climate }
      </td>
      <td>
        { planet.gravity }
      </td>
      <td>
        { planet.terrain }
      </td>
      <td>
        { planet.surface_water }
      </td>
      <td>
        { planet.population }
      </td>
      <td>
        { planet.films }
      </td>
      <td>
        { planet.created }
      </td>
      <td>
        { planet.edited }
      </td>
      <td>
        { planet.url }
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  planet: PropTypes.shape({
    climate: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    gravity: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
