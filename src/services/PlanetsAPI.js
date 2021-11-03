const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const data = async () => {
  const response = await fetch(URL);
  const result = await response.json().results;
  delete result.residents;

  return result;
}
