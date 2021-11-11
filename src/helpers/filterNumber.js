function filterNumber(value) {
  if (/[0-9.,]/.test(value)) {
    return Number(value);
  }
  return NaN;
}

export default filterNumber;
