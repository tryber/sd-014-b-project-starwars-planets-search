const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetList() {
  const responseObj = await fetch(URL_PLANETS);
  const response = await responseObj.json();

  return response;
}

export default fetchPlanetList;
