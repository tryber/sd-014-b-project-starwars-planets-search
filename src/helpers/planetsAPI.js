const fetchData = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  return response.json();
};

export default fetchData;
