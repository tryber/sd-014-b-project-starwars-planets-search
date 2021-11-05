import React from 'react';
import { useFilters } from '../context/Filters';

const NumericFilterTags = () => {
  const { filters } = useFilters();

  const { filterByNumericValues } = filters;

  const createTags = () => {
    let output = '';
    if (filterByNumericValues.length > 0) {
      output = filterByNumericValues.map((object, index) => (
        <div key={ index }>
          <p>{ `${object.column} é ${object.comparison} ${object.value}` }</p>
          <button type="button">X</button>
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
