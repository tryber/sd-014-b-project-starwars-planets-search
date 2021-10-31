const PLANETS_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function fetchPlanetsAPI() {
  const responseAPI = await fetch(PLANETS_API_URL);
  const planetsJSON = await responseAPI.json();
  return planetsJSON.results;
}
