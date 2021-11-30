const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export default planetsAPI;
