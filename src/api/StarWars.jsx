const fetchPlanets = async () => {
  const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await planets.json();
  const data = json.results;
  return data;
};

export default fetchPlanets;
