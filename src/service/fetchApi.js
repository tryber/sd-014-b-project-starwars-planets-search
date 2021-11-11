async function fetchApi() {
  const requestApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await requestApi.json();
  const response = data.results;
  return response;
}

export default fetchApi;
