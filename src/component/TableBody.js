import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ obj }) {
  const INDEX = 9;
  const array = Object.values(obj);
  array.splice(INDEX, 1);
  return (
    <tr>
      {
        array.map((item, index) => (
          <td data-testid={ index === 0 && 'planet-name' } key={ index }>{item}</td>))
      }
    </tr>
  );
}

TableBody.propTypes = {
  obj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableBody;
