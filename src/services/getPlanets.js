const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanets() {
  const fetchApi = await fetch(endPoint);
  const { results } = await fetchApi.json();
  return results;
}
