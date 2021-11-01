const BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const { results } = await fetch(BASE_URL).then((response) => response.json());
  return results;
};

export default fetchPlanets;
