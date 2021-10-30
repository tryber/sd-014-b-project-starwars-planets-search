const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanetsAPI = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export default fetchPlanetsAPI;
