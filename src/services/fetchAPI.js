const fetchAPI = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsResponse = await response.json();

  return planetsResponse;
};
export default fetchAPI;
