async function fetchAPI() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const resultAPI = await response.json();
  return resultAPI.results;
}

export default fetchAPI;
