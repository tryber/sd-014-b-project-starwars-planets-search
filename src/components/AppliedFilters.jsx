import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const AppliedFilters = () => {
  const { filters: { filterByNumericValues },
    handleDeleteClick } = useContext(PlanetsContext);
  return (
    <div>
      {filterByNumericValues.map((item, index) => (
        <div data-testid="filter" key={ index }>
          <p>{item.column}</p>
          <p>{item.comparison}</p>
          <p>{item.value}</p>
          <button
            type="button"
            onClick={ () => handleDeleteClick(item.id) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppliedFilters;
