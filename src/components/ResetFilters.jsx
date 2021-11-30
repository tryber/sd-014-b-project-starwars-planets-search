import React from 'react';
import PropTypes from 'prop-types';

export default function ResetFilters({ columns, removeFilter }) {
  const { column, comparison, value } = columns;
  return (
    <div data-testid="filter">
      <span>{ column }</span>
      <span>{ comparison }</span>
      <span>{ value }</span>
      <button type="button" onClick={ () => removeFilter({ column }, columns) }>X</button>
    </div>
  );
}

ResetFilters.propTypes = {
  columns: PropTypes.objectOf(PropTypes.string).isRequired,
  removeFilter: PropTypes.func.isRequired,
};
