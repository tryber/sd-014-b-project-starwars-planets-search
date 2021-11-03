const API_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestApiPlanets = async () => {
  const response = await fetch(API_PLANETS);
  const responseJson = response.json();
  return responseJson;
};

export default requestApiPlanets;
