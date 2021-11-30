export default function filterData(data, arrayOfFilters) {
  return arrayOfFilters
    .map(({ column, comparison, value }) => data
      .filter((planet) => {
        if (!value) return true;
        if (comparison === 'maior que') {
          return Number(planet[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(planet[column]) < Number(value);
        }
        if (comparison === 'igual a') return planet[column] === value;
        return true; // eslint(array-callback-return)
      }))
    .reduce((acc, curr) => {
      if (curr !== undefined) {
        return acc.filter((planet) => curr.includes(planet));
      }
      return acc;
    });
}
