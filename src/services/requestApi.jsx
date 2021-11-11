const fetchApi = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await request.json();
  return data;
};

export default fetchApi;
