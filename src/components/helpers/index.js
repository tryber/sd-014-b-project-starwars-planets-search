export default async function fetchURL() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const results = await response.json();
  console.log(results.results);
  return results.results;
}
