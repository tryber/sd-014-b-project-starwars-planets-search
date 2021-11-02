const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  try {
    const response = await fetch(URL);
    const fetchedPlanets = response.json();
    return fetchedPlanets;
  } catch (error) {
    return error;
  }
};

export default getPlanets;
