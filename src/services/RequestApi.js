const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchApiPlanets = async () => {
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export default fetchApiPlanets;
