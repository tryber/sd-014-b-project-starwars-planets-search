export const columns = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Residents',
  'Films',
  'Created',
  'Edited',
];

export const columnFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const comparisonFilter = [
  'maior que',
  'menor que',
  'igual a',
];

export const INITIAL_COMPARISON = {
  column: 'population',
  comparison: 'maior que',
  value: '',
};

export const FILTERS = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
