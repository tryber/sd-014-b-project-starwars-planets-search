const fetchApiPlanets = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsList = await result.json();
  return planetsList.results;
};

export default fetchApiPlanets;
