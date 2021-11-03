async function getAPI() {
  const responseAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const resultsAPI = await responseAPI.json();
  const data = resultsAPI.results;
  console.log(data);
  return data;
}

export default getAPI;
