const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export default fetchPlanets;
