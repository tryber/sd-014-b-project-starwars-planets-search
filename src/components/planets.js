const planetsApi = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  return result.json();
};
export default planetsApi;
