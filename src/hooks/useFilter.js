import { useState } from 'react';

const INITIAL_FILTER = {
  filters:
  {
    filterByName: {},
    filterByNumericValues: [],
  },
};

export default function useFilter() {
  const [filterData, setFilter] = useState(INITIAL_FILTER);

  const newTextFilter = (value) => {
    setFilter({
      filters: {
        ...filterData.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  const newNumericFilter = (value) => {
    setFilter({
      filters: {
        ...filterData.filters,
        filterByNumericValues: [
          ...filterData.filters.filterByNumericValues,
          { ...value },
        ],
      },
    });
  };

  return [filterData, newTextFilter, newNumericFilter];
}
