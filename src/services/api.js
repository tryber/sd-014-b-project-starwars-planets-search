export default async function requestPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const json = await fetch(URL);
  const data = await json.json();
  return data;
}