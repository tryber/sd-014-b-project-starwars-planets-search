import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const FilterCard = () => {
  const {
    filters: {
      filters: { filterByNumericValues } },
    handleRemoveFilters } = useContext(DataContext);

  const handleRemove = (id) => {
    handleRemoveFilters(id);
  };
  const cards = filterByNumericValues.map((filter) => {
    const { column, comparison, value } = filter;
    return (
      <div key={ column }>
        <p>
          <span>
            { column }
            {' '}

          </span>
          |
          <span>
            {' '}
            { comparison }
            {' '}
          </span>
          |
          <span>
            {' '}
            { value }
            {' '}
          </span>
        </p>
        <button
          type="button"
          data-testid="filter"
          onClick={ () => handleRemove(column) }
        >
          X
        </button>
      </div>
    );
  });

  return (
    <div>
      {cards}
    </div>
  );
};

export default FilterCard;
