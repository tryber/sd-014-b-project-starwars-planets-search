import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const FilteredElements = () => {
  const { setFilter, filter } = useContext(GlobalContext);

  const handleClick = (column) => {
    const filterByNum = filter.filters.filterByNumericValues;
    setFilter({ filters: {
      ...filter.filters,
      filterByNumericValues:
        filterByNum.filter((e) => !Object.values(e).includes(column)),
    } });
  };

  return (
    <div>
      {
        filter.filters.filterByNumericValues.length > 0
        && filter.filters.filterByNumericValues.map((e, index) => {
          const {
            column,
            comparison,
            value,
          } = e;

          return (
            <p key={ index } data-testid="filter">
              { `${column} ${comparison} ${value}` }
              <button type="button" onClick={ () => { handleClick(column); } }>x</button>
            </p>
          );
        })
      }
    </div>
  );
};

export default FilteredElements;
