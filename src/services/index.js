function compare(element, operator, value) {
  if (!value) {
    return true;
  }
  if (operator === 'maior que') {
    return element > value;
  }
  if (operator === 'menor que') {
    return element < value;
  }
  if (operator === 'igual a') {
    return element === value;
  }
}

export default compare;
