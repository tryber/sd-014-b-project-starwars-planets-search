const fetchPlanet = async () => {
  const Request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await Request.json();
  const result = json.results;
  return result;
};

export default fetchPlanet;
