const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function fetchingPlanets() {
  return (
    fetch(PLANET_API)
      .then((request) => request.json())
      .then(({ results }) => results)
  );
}

export default fetchingPlanets;
