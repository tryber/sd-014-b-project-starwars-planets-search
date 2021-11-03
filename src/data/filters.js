export default function applyDataFilters(data, filters = []) {
  return filters.reduce(
    (filteredData, filter) => filteredData.filter((itemData) => filter(itemData)),
    [...data],
  );
}

export function sortBy(criteria, order, data) {
  data.sort((a, b) => {
    const itemA = a[criteria];
    const itemB = b[criteria];

    return (
      order === 'ASC'
        ? itemA.localeCompare(itemB, undefined, { numeric: true })
        : itemB.localeCompare(itemA, undefined, { numeric: true })
    );
  });
}
