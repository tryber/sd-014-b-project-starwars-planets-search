async function requestApi() {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await result.json();
  return data;
}

export default requestApi;
