const planetsApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const requestPlanet = await fetch(planetsApi);
  const data = await requestPlanet.json();
  const result = data.results;
  return result;
};

export default fetchPlanets;

// a Api retorna um objeto do tipo:

// {
// "count": 60,
// "next": "https://swapi-trybe.herokuapp.com/api/planets/?page=2",
// "previous": null,
// "results": [
//     {
//         "name": "Tatooine",
//         "rotation_period": "23",
//         "orbital_period": "304",
//         "diameter": "10465",
//         "climate": "arid",

// as informaçoes que queremos estão na prop "results" do objeto de retorno da API
