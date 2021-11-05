const starWarsPlanetsAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(starWarsPlanetsAPI);
  return response.json();
};

export default fetchPlanets;
