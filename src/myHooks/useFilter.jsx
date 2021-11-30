import { useState } from 'react';

const INITIAL_FILTER = {
  filters: {
    filterByName: {},
    filterByNumericValues: [],
    order: {
      column: 'Name',
      sort: 'ASC',
    },
  },
};

export default function useFilter() {
  const [filterObj, setFilter] = useState(INITIAL_FILTER);

  const nameFilter = (value) => {
    setFilter({
      filters:
      {
        ...filterObj.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const numberFilter = (value) => {
    setFilter({
      filters:
      {
        ...filterObj.filters,
        filterByNumericValues: [
          ...filterObj.filters.filterByNumericValues,
          { ...value },
        ],
      },
    });
  };

  const funcAscDesc = (column, sort) => {
    setFilter({
      filters:
      {
        ...filterObj.filters,
        order: {
          column,
          sort,
        },
      },
    });
  };

  return [nameFilter, numberFilter, filterObj, funcAscDesc];
}
