const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetcPlanetshAPI() {
  const response = await fetch(URL_API);
  const results = await response.json();
  return results;
}

export default fetcPlanetshAPI;
