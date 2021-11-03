export default async function fetchPlanets() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets');
  const data = await response.json();

  return data.results;
}

export async function fetchAllPlanets() {
  const baseURL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const firstPageResponse = await fetch(baseURL);
  const firstPagePlanetsData = await firstPageResponse.json();
  const { count: planetsCount, results: firstPagePlanets } = firstPagePlanetsData;
  const planetsPerPage = 10;
  const lastPage = Math.ceil(planetsCount / planetsPerPage);

  let nextPage = 2;
  const pagesDataPromises = [];
  while (nextPage <= lastPage) {
    pagesDataPromises.push(
      fetch(`${baseURL}?page=${nextPage}`).then((response) => response.json()),
    );
    nextPage += 1;
  }

  const pagesData = await Promise.all(pagesDataPromises);

  return pagesData.reduce(
    (planets, { results }) => [...planets, ...results],
    [...firstPagePlanets],
  );
}
