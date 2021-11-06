import { useState } from 'react';

const INITIAL_FILTER = {
  filters:
  {
    filterByName: {},
    filterByNumericValues: [],
  },
};

export default function useFilter() {
  const [filter, setFilter] = useState(INITIAL_FILTER);

  const addName = (value) => {
    setFilter({
      filters: {
        filterByName: { name: value },
        ...filter.filters,
      },
    });
  };

  const addFilterNumeric = (value) => {
    setFilter({
      filters: {
        ...filter.filters,
        filterByNumericValues: [
          ...filter.filters.filterByNumericValues,
          { ...value },
        ],
      },
    });
  };

  return [filter, addName, addFilterNumeric];
}
