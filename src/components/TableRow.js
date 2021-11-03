import PropTypes from 'prop-types';
import React from 'react';

export default function TableRow({ data }) {
  return (
    <tr>
      {data.map(
        (cellData, index) => (
          <td key={ index } data-testid={ !index ? 'planet-name' : '' }>{cellData}</td>
        ),
      )}
    </tr>
  );
}

TableRow.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};
