import React from 'react';
import PropTypes from 'prop-types';

function SelectedFilters({ filterByNumeric }) {
  function filterRemove() {

  }

  return (
    <div>
      {filterByNumeric.map(({ column, comparison, value }) => (
        <div key={ column }>
          <span>{column}</span>
          <span> - </span>
          <span>{comparison}</span>
          <span> - </span>
          <span>{value}</span>
          <button
            type="button"
            onClick={ () => filterRemove() }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

SelectedFilters.propTypes = {
  filterByNumeric: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.number,
    }),
  ).isRequired,
  map: PropTypes.func.isRequired,
};

export default SelectedFilters;
