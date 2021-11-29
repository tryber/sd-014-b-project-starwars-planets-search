import { useState } from 'react';

const INITIAL_FILTER = {
  filters: {
    filterByName: {},
  },
};

export default function useFilter() {
  const [filterObj, setFilter] = useState(INITIAL_FILTER);

  const inputFilter = (value) => {
    setFilter({
      filters: {
        ...filterObj.filters,
        filterByName: {
          name: value,
        },
      },
    });
  };

  return [inputFilter];
}
