const getPlanets = async () => {
  const fetchPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const responsePlanets = await fetchPlanets.json();
  return responsePlanets;
};

export default getPlanets;
