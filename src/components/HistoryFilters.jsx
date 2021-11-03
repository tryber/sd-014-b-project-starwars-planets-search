import React from 'react';
import PropTypes from 'prop-types';

export default function HistoryFilters({ columns, removeFilter }) {
  const { column, comparison, value } = columns;
  return (
    <div data-testid="filter">
      <span>{column}</span>
      <span>
        {' '}
        {comparison}
        {' '}
      </span>
      <span>
        {' '}
        {value}
        {' '}
      </span>
      <button type="button" onClick={ () => removeFilter(columns) }>X</button>
    </div>
  );
}

HistoryFilters.propTypes = {
  columns: PropTypes.objectOf(PropTypes.string).isRequired,
  removeFilter: PropTypes.func.isRequired,
};
