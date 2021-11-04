function compare(element, operator, value) {
  if (!value) {
    return true;
  }
  if (operator === 'maior que') {
    return parseInt(element, 10) > value;
  }
  if (operator === 'menor que') {
    return parseInt(element, 10) < value;
  }
  if (operator === 'igual a') {
    return element === value;
  }
}

export default compare;
