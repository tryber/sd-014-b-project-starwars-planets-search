const fetchPlanets = async () => {
  // const URL_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';
  // Atingi o limite de acesso da API e o Vitor Veloso sugeriu a URL abaixo
  const URL = 'https://swapi.dev/api/planets/';
  try {
    const response = await fetch(URL);
    const resolve = await response.json();
    return resolve.results;
  } catch (error) {
    return error.message;
  }
};

export default fetchPlanets;
