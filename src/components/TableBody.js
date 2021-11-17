import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ obj }) {
  const magicNumber = 9;
  const array = Object.values(obj);
  array.splice(magicNumber, 1);
  return (
    <tr>
      {
        array.map((item, index) => <td key={ index }>{ item }</td>)
      }
    </tr>
  );
}

TableBody.propTypes = {
  obj: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableBody;
