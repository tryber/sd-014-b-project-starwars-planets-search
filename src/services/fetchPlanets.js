const starWarsPlanetsAPI = 'https://swapi-trybe.herokuapp.com/api/planets/'

const fetchPlanets = async() => {
  const response = await fetch(starWarsPlanetsAPI).then(() => JSON.stringify());
  return response;
}

export default fetchPlanets;
