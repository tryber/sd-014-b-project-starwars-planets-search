import React, { useState } from 'react';
import Context from './Context';

function PlanetProvider(prop) {
  const [data, setData] = useState([]);

  const fetchPlanet = async () => {
    const Request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await Request.json();
    const result = json.results;
    return result;
  };

  // Sistema de ordem inspirada no Codigo do Aluno Dheniarley Cruz !
  // Link: https://github.com/tryber/sd-014-b-project-starwars-planets-search/pull/115

  function orderName(planets, column, order) {
    const returnPlanets = planets.sort((a, b) => {
      if (a[column] > b[column]) return 1;
      if (a[column] < b[column]) return 1 - 2;
      return 0;
    });

    if (order === 'ASC') return returnPlanets;
    return returnPlanets.reverse();
  }

  function orderNumber(planets, column, order) {
    const returnPlanets = planets.sort((a, b) => {
      if (Number(a[column]) > Number(b[column])) return 1;
      if (Number(a[column]) < Number(b[column])) return 1 - 2;
      return 0;
    });

    if (order === 'ASC') return returnPlanets;
    return returnPlanets.reverse();
  }

  function dataOrdem(planets, column = 'name', order = 'ASC') {
    let returnPlanets = [];
    if (column === 'name') {
      returnPlanets = orderName(planets, column, order);
    }

    if (column !== 'name') {
      returnPlanets = orderNumber(planets, column, order);
    }

    return returnPlanets;
  }

  return (
    <Context.Provider value={ { data, setData, fetchPlanet, dataOrdem } }>
      { prop.children }
    </Context.Provider>
  );
}
export default PlanetProvider;
