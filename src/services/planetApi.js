const PLANET_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanet = async () => {
  const requestPlanet = await fetch(PLANET_URL);
  const data = await requestPlanet.json();
  const result = data.results;
  return result;
};

export default getPlanet;
