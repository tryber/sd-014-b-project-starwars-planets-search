const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const dataPlanets = async () => {
  const response = await fetch(URL);
  const result = await response.json();

  return result;
};

export default dataPlanets;
