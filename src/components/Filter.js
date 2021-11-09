import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Button from './Button';

const Filter = () => {
  const {
    filters: { filterByNumericValues },
    removeFilter,
  } = useContext(StarWarsContext);
  return (
    <div>
      {
        filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <span>{ `${column} ${comparison} ${value}`}</span>
            <Button
              id={ index }
              label="X"
              onClick={ ({ target }) => removeFilter(target.id) }
            />
          </div>
        ))
      }
    </div>
  );
};

export default Filter;
