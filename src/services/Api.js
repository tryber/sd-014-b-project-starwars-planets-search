const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchPlanets() {
  const request = await fetch(URL_PLANETS);
  const response = await request.json();
  return response;
}
