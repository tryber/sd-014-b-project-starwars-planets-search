import { useState } from 'react';

const INITIAL_FILTER = {
  filters: {
    filterByName: {},
    filterByNumericValues: [],
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

  return [nameFilter, numberFilter, filterObj];
}
