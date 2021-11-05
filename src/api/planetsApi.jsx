async function fetchApi() {
  const planetListApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const respose = await planetListApi.json();
  return respose.results;
}

export default fetchApi;
