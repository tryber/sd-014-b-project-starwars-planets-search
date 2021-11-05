const NEGATIVO = -1;
const POSITIVO = 1;

export function sortTextColumns(order, arrayToBeSorted) {
  if (order.sort === 'ASC') {
    return arrayToBeSorted.sort((a, b) => {
      if (a[order.column] > b[order.column]) return POSITIVO;
      if (a[order.column] < b[order.column]) return NEGATIVO;
      return 0;
    });
  }
  if (order.sort === 'DESC') {
    return arrayToBeSorted.sort((a, b) => {
      if (a[order.column] > b[order.column]) return NEGATIVO;
      if (a[order.column] < b[order.column]) return POSITIVO;
      return 0;
    });
  }
}

export function sortNumericColumns(order, arrayToBeSorted) {
  if (order.sort === 'ASC') {
    return arrayToBeSorted
      .sort((a, b) => Number(a[order.column]) - Number(b[order.column]));
  }
  if (order.sort === 'DESC') {
    return arrayToBeSorted
      .sort((a, b) => Number(b[order.column]) - Number(a[order.column]));
  }
}

/*
Referência:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
