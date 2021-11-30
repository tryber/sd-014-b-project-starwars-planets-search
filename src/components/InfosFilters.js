import PropTypes from 'prop-types';
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

ShowFilters.propTypes = {
  test: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

export default ShowFilters;
