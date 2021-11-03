import PropTypes from 'prop-types';
import React from 'react';

export default function TableLine({ item }) {
  const values = item ? Object.values(item) : [];
  const residents = 9;
  return (
    <tr role="row">
      {values.map((valueItem, index) => (
        index === residents
          ? <span />
          : <td key={ index }>{valueItem}</td>))}
    </tr>
  );
}

TableLine.propTypes = {
  item: PropTypes.objectOf(PropTypes.array).isRequired,
};
