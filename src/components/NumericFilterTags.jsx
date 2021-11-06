import React from 'react';
import { useFilters } from '../context/Filters';

const NumericFilterTags = () => {
  const { filters, setFilters } = useFilters();

  const { filterByNumericValues } = filters;

  const deleteFilter = (tagObject) => {
    const newFilters = filterByNumericValues.filter((object) => object !== tagObject);
    setFilters({ ...filters, filterByNumericValues: newFilters });
  };

  const createTags = () => {
    let output = '';
    if (filterByNumericValues.length > 0) {
      output = filterByNumericValues.map((object, index) => (
        <div key={ index } data-testid="filter">
          <p>{ `${object.column} é ${object.comparison} ${object.value}` }</p>
          <button type="button" onClick={ () => deleteFilter(object) }>X</button>
        </div>
      ));
    }
    return output;
  };

  return (
    <section>
      { createTags() }
    </section>
  );
};

export default NumericFilterTags;
