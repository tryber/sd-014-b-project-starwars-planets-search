const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default fetchPlanets;
