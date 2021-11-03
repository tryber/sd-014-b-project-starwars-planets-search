const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const fetchPlanets = async () => {
  try {
    const response = await fetch(PLANETS_URL);
    const { results } = await response.json();
    return results;
  } catch (error) {
    return error;
  }
};

export const fetchOutraCoisa = async () => {
  // try {
  //   const response = await fetch(URL);
  //   const { results } = await response.json();
  //   setData(results);
  // } catch (error) {
  //   setErr(error);
  // }
};
