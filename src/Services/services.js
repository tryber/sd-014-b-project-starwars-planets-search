import response from '../testData';

const UrlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsRequest = async () => {
  try {
    const request = await fetch(UrlApi);
    const resolve = await request.json();
    return resolve.results;
  } catch (error) {
    return response;
  }
};

export default planetsRequest;
