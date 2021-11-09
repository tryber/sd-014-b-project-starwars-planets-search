const API_BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starWarsAPI = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const planets = response.json();
    return planets;
  } catch (error) {
    return error;
  }
};

export default starWarsAPI;
