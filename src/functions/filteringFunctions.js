const EMPTY = 0;
const RADIX = 10;

export const filterPlanetsByName = (planets, name) => {
  let output = planets;

  if (name !== '') {
    output = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
  }

  return output;
};

export const filterPlanetsByNumericValues = (planets, filterByNumericValues) => {
  let output = planets;
  if (filterByNumericValues.length > EMPTY) {
    filterByNumericValues.forEach((filter) => {
      if (filter.comparison === 'maior que') {
        output = output
          .filter((object) => {
            const objectValue = object[filter.column];
            return parseInt(objectValue, RADIX) > filter.value;
          });
      } else if (filter.comparison === 'menor que') {
        output = output
          .filter((object) => {
            const objectValue = object[filter.column];
            return parseInt(objectValue, RADIX) < filter.value;
          });
      } else {
        output = output
          .filter((object) => object[filter.column] === filter.value);
      }
    });
  }
  return output;
};
