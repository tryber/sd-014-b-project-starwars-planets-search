const PLANET_LIST_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetList = () => (
  fetch(PLANET_LIST_URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetList;
