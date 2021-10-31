async function fetchApi() {
  const requestApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await requestApi.json();
  const result = data.results;
  return result;
}

export default fetchApi;
