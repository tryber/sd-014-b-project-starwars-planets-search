const fetch = require('node-fetch');

(function Edu() {
  const name = 'Edu';
  console.log(name);
}());

(() => {
  console.log('duribeiro');
})();

const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const { results } = await fetch(END_POINT).then((r) => r.json());
  // console.log(results[0].name);
  return results[0].name;
};

(async () => console.log(await getPlanets()))();
