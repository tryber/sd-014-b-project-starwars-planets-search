const optionsCollum = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

export const optionsComparison = ['maior que', 'menor que', 'igual a '];

export const removeOptionColumn = (array,value) => {
  const indexOption = array.indexOf(value);
  array.splice(indexOption, 1);
};

export default optionsCollum;
