const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchDataApi = await fetch(url);
  const responseJson = await fetchDataApi.json();
  const resultsJson = responseJson.results;
  return resultsJson.sort((a, b) => {
    if (a.name < b.name) {
      const negative = -1;
      return negative;
    }
    return true;
  });
};

export default fetchApi;
