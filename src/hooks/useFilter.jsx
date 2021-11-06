import { useState } from 'react';

const INITIAL_FILTER = {
  filters:
  {
    filterByName: {},
    filterByNumericValues: [],
  },
};

export default function useFilter() {
  const [filterObject, setFilter] = useState(INITIAL_FILTER);

  const addNameFilter = (value) => {
    setFilter({
      filters: {
        ...filterObject.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const addFilterNumeric = (value) => {
    setFilter({
      filters: {
        ...filterObject.filters,
        filterByNumericValues: [
          ...filterObject.filters.filterByNumericValues,
          { ...value },
        ],
      },
    });
  };

  return [filterObject, addNameFilter, addFilterNumeric];
}
