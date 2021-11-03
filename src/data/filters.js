function applyDataFilters(data, filters = []) {
  return filters.reduce(
    (filteredData, filter) => filteredData.filter((itemData) => filter(itemData)),
    [...data],
  );
}

export default applyDataFilters;
