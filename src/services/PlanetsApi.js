const PLANETS_BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getTablePlanets = async () => {
  const response = await fetch(PLANETS_BASE_URL);
  const planetsResponse = await response.json();
  return planetsResponse;
};

export default getTablePlanets;
