const fetchApi = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await response.json();

  return planets;
};

export default fetchApi;
