import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ arrayPlanets }) {
  return (
    <tr>
      { Object.values(arrayPlanets)
        .map((infoPlanet, index) => (
          <td
            data-testid={ infoPlanet === arrayPlanets.name ? 'planet-name' : '' }
            key={ index }
          >
            { infoPlanet }
          </td>)) }
    </tr>
  );
}

TableBody.propTypes = {
  arrayPlanets: PropTypes.shape().isRequired,
};

export default TableBody;
