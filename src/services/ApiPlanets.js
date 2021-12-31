const API_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getDataByPlanets = async () => {
  try {
    const response = await fetch(API_PLANETS);
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log('error, api not found');
  }
};

export default getDataByPlanets;
