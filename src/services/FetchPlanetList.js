import response from '../testData';

const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanetList() {
  const responseObj = await fetch(URL_PLANETS);
  const data = await responseObj.json();

  return response.results;
  // return data.results;
}

export default fetchPlanetList;
