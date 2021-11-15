export const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = async () => {
  const { results } = await fetch(END_POINT).then((r) => r.json());
  return results;
};
