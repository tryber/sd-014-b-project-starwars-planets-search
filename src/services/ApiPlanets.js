const API_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getDataByPlanets = async () => {
  const response = await fetch(API_PLANETS);
  const data = await response.json();
  return data;
};

export default getDataByPlanets;
