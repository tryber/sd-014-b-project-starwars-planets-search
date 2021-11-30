import PropTypes from "prop-types"
import React from 'react';

function ShowFilters({ test }) {
  return (
    <span>
      {' '}
      {test.column}
      {' '}
      {test.comparison}
      {' '}
      {test.value}
      {' '}
    </span>
  );
}


export default ShowFilters;
