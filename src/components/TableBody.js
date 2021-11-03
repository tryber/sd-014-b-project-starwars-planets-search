import PropTypes from 'prop-types';
import React from 'react';

function TableBody({ planet }) {
  const DELETE = 9;

  const listPlanet = Object.values(planet);
  listPlanet.splice(DELETE, 1);

  return (
    <tr>
      {
        listPlanet.map((planetName, index) => <td key={ index }>{ planetName }</td>)
      }
    </tr>
  );
}

TableBody.propTypes = {
  planet: PropTypes.arrayOf,
}.isRequered;

export default TableBody;
