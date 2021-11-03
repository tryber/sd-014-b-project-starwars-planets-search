function SetRemoveFilterNumericValues(params, filters, setFilters) {
  const { filters: { filterByNumericValues } } = filters;
  const newList = filterByNumericValues.filter((obj) => obj.column !== params);
  if (newList.length < 1) {
    const emptyList = {
      filters: {
        filterByName: { ...filters.filters.filterByName },
        filterByNumericValues: [
          { column: '',
            comparison: '',
            value: '',
          },
        ],
        order: { ...filters.filters.order },
      },
    };
    setFilters(emptyList);
  } else {
    const newFilter = {
      filters: {
        filterByName: { ...filters.filters.filterByName },
        filterByNumericValues: [...newList],
        order: { ...filters.filters.order },
      },
    };
    setFilters(newFilter);
  }
}

export default SetRemoveFilterNumericValues;
