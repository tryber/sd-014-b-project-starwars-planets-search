const ZERO = 0;
const ONE = 1;
const KEEP_LAST_3_CHARACTERS = -3;
const KEEP_LAST_13_CHARACTERS = -13;
const CUT_FIRST_44_CHARACTERS = 44;

const manipulateCellValue = (letter, column) => {
  let output;

  switch (column) {
  case ('url'):
    output = (`0${letter[column].slice(CUT_FIRST_44_CHARACTERS)}`)
      .slice(KEEP_LAST_3_CHARACTERS).toLowerCase();
    break;
  case ('surface_water'):
  case ('orbital_period'):
  case ('diameter'):
  case ('rotation_period'):
  case ('population'):
    output = letter[column] === 'unknown'
      ? letter[column].toLowerCase()
      : (`000000000000${letter[column]}`).slice(KEEP_LAST_13_CHARACTERS).toLowerCase();
    break;
  case ('films'):
    output = letter[column][ZERO].toLowerCase();
    break;
  default:
    output = letter[column].toLowerCase();
  }

  return output;
};

const sortPlanets = (planets, order) => (
  planets.sort((a, b) => {
    const x = manipulateCellValue(a, order.column);
    const y = manipulateCellValue(b, order.column);
    if (x < y) { return order.sort === 'ASC' ? -ONE : ONE; }
    if (x > y) { return order.sort === 'ASC' ? ONE : -ONE; }
    return ZERO;
  })
);

export default sortPlanets;
