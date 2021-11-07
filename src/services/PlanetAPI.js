const PLANET_STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestPlanetAPI = async () => {
  const response = await fetch(PLANET_STARWARS_API);
  const responseJson = await response.json();
  return responseJson;
};

export default requestPlanetAPI;
