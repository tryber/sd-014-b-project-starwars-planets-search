import mockedData from '../testData';

const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getPlanets() {
  try {
    const fetchApi = await fetch(endPoint);
    const { results } = await fetchApi.json();
    return results;
  } catch (error) {
    console.log(error);
    return mockedData;
  }
}
