const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanets() {
  const fetchApi = await fetch(endPoint);
  const jsonParsing = await fetchApi.json();
  console.log(jsonParsing);
}
