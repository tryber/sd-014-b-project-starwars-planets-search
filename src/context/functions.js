export function compareByValue(list, colunm, value, compare) {
  let result = [];
  switch (compare) {
  case 'maior que':
    result = list.filter((item) => parseInt(item[colunm], 0) > value);
    break;
  case 'menor que':
    result = list.filter((item) => parseInt(item[colunm], 0) < value);
    break;
  case 'igual a':
    result = list.filter((item) => item[colunm] === value);
    break;
  default:
    break;
  }
  return result;
}

// references: https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
export function ordenation(a, b) {
  const ONE_NEGATIVE = -1;
  if (a.name < b.name) return ONE_NEGATIVE;
  if (a.name > b.name) return 1;
  return 0;
}

// Auxiliado por Gustavo Sant'ann
export function ordenationByColumn(a, b, order, colunm) {
  const ONE_NEGATIVE = -1;
  if (Number(a[colunm]) < Number(b[colunm])) {
    if (order === 'ASC') return 1;
    return 1;
  }
  if (Number(a[colunm]) > Number(b[colunm])) {
    if (order === 'DESC') return ONE_NEGATIVE;
    return ONE_NEGATIVE;
  }
  return 0;
}
