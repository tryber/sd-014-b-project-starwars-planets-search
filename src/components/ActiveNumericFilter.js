import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsTableContext from '../contexts';

export default function ActiveNumericFilter({ numericFilter, index }) {
  const { column, comparison, value } = numericFilter;
  const { filters, setFilters } = useContext(PlanetsTableContext);

  function handleClick() {
    const { filterByNumericValues: newfilterByNumericValues } = filters;

    newfilterByNumericValues.splice(index, 1);
    setFilters({ ...filters, filterByNumericValues: newfilterByNumericValues });
  }

  return (
    <div data-testid="filter">
      <span><strong>{`${column} ${comparison} ${value}`}</strong></span>
      <button
        type="button"
        onClick={ handleClick }
      >
        X
      </button>
    </div>
  );
}

ActiveNumericFilter.propTypes = {
  numericFilter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
