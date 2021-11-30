import PropTypes from 'prop-types';
import React from 'react';

function Columns({ nameColumn }) {
  return (
    <option value={ nameColumn }>
      {nameColumn}
    </option>
  );
}

Columns.propTypes = {
  nameColumn: PropTypes.string.isRequired,
};

export default Columns;
