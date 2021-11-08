const fetchPlanet = async () => {
  const Request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const json = await Request.json();
  return json.results;
};

export default fetchPlanet;
