export function comparePlanet(compare, value, setState, list) {
  const maiorQue = 'maior que';
  const menorQue = 'menor que';
  const igualA = 'igual a';
  if (compare === maiorQue) {
    const filterComparison = list
      .filter((planet) => parseInt(planet.population, 0) > value && planet
        .population !== 'unknown');
    setState(filterComparison);
  }
  if (compare === menorQue) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .population, 0) < value && planet
      .population !== 'unknown');
    setState(fiterComparison);
  }
  if (compare === igualA) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .population, 0) === value);
    setState(fiterComparison);
  }
}

export function compareOrbital(compare, value, setState, list) {
  const maiorQue = 'maior que';
  const menorQue = 'menor que';
  const igualA = 'igual a';
  if (compare === maiorQue) {
    const filterComparison = list.filter((planet) => parseInt(planet
      .orbital_period, 0) > value && planet
      .orbital_period !== 'unknown');
    setState(filterComparison);
  }
  if (compare === menorQue) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .orbital_period, 0) < value && planet
      .orbital_period !== 'unknown');
    setState(fiterComparison);
  }
  if (compare === igualA) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .orbital_period, 0) === value && planet
      .orbital_period !== 'unknown');
    setState(fiterComparison);
  }
}

export function compareDiameter(compare, value, setState, list) {
  const maiorQue = 'maior que';
  const menorQue = 'menor que';
  const igualA = 'igual a';
  if (compare === maiorQue) {
    const filterComparison = list.filter((planet) => parseInt(planet
      .diameter, 0) > value && planet
      .diameter !== 'unknown');
    setState(filterComparison);
  }
  if (compare === menorQue) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .diameter, 0) < value && planet
      .diameter !== 'unknown');
    setState(fiterComparison);
  }
  if (compare === igualA) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .diameter, 0) === value && planet
      .diameter !== 'unknown');
    setState(fiterComparison);
  }
}

export function compareRotation(compare, value, setState, list) {
  const maiorQue = 'maior que';
  const menorQue = 'menor que';
  const igualA = 'igual a';
  if (compare === maiorQue) {
    const filterComparison = list.filter((planet) => parseInt(planet
      .rotation_period, 0) > value && planet
      .rotation_period !== 'unknown');
    setState(filterComparison);
  }
  if (compare === menorQue) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .rotation_period, 0) < value && planet
      .rotation_period !== 'unknown');
    setState(fiterComparison);
  }
  if (compare === igualA) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .rotation_period, 0) === value && planet
      .rotation_period !== 'unknown');
    setState(fiterComparison);
  }
}

export function compareSurface(compare, value, setState, list) {
  const maiorQue = 'maior que';
  const menorQue = 'menor que';
  const igualA = 'igual a';
  if (compare === maiorQue) {
    const filterComparison = list.filter((planet) => parseInt(planet
      .surface_water, 0) > value && planet
      .surface_water !== 'unknown');
    setState(filterComparison);
  }
  if (compare === menorQue) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .surface_water, 0) < value && planet
      .surface_water !== 'unknown');
    setState(fiterComparison);
  }
  if (compare === igualA) {
    const fiterComparison = list.filter((planet) => parseInt(planet
      .surface_water, 0) === value && planet
      .surface_water !== 'unknown');
    setState(fiterComparison);
  }
}
