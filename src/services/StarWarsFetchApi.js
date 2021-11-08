export const DATA_STARWARS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function StarWarsFetchApi() {
  const response = await fetch(DATA_STARWARS_URL);
  const data = await response.json();
  return data;
}
export default StarWarsFetchApi;
