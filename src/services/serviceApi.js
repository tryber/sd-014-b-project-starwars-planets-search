const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchDataApi = await fetch(url);
  const responseJson = await fetchDataApi.json();
  return responseJson.results;
};

export default fetchApi;
