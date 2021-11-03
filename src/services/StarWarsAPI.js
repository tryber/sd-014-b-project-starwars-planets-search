async function fetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets';
  const firstPageResponse = await fetch(url);
  const firstPagePlanetsData = await firstPageResponse.json();
  const { count: planetsCount, results: firstPagePlanets } = firstPagePlanetsData;
  const planetsPerPage = 10;
  const lastPage = Math.ceil(planetsCount / planetsPerPage);
  let nextPage = 2;

  const planets = [...firstPagePlanets];
  while (nextPage <= lastPage) {
    fetch(`${url}?page=${nextPage}`)
      .then((response) => response.json())
      .then((data) => data.results.forEach((planet) => planets.push(planet)));
    nextPage += 1;
  }

  return planets;
}

export default fetchPlanets;
