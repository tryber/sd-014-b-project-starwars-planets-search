const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  const requestPlanet = await fetch(url);
  const data = await requestPlanet.json();
  const result = data.results;
  return result;
};

export default fetchAPI;
