const dataFilter = {
  dataColumn:
   [
     'population',
     'orbital_period',
     'diameter',
     'rotation_period',
     'surface_water',
   ],
  dataComparison: ['maior que', 'menor que', 'igual a'],
  dataNumeric: {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  },
};

export default dataFilter;
