import PropTypes from 'prop-types';
import React from 'react';

export default function ActiveFilter({ filterName, removeFilter }) {
  return (
    <div data-testid="filter">
      { filterName }
      <button type="button" onClick={ () => removeFilter(filterName) }>X</button>
    </div>
  );
}

ActiveFilter.propTypes = {
  filterName: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired,
};
