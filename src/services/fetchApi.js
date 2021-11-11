const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  if (!response.ok) return ('Ocorreu um erro durante a requisição!');
  const data = await response.json();
  return data.results;
};

export default fetchApi;
