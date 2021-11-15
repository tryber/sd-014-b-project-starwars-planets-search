const planetsAPI = async () => {
  const planetsList = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');

  const results = await planetsList.json();

  return results;
};

export default planetsAPI;
