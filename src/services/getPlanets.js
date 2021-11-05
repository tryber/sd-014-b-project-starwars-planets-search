import response from '../testData';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  try {
    const request = await fetch(URL);
    const resolve = await request.json();
    // console.log(resolve.results);
    return resolve.results;
  } catch (error) {
    return response;
  }
};

export default getPlanets;
