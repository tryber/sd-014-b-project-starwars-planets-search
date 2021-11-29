import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';
import fetchPlanet from '../services/fetchPlanets';

function PlanetsProvider(prop) {
  const [data, setPlanets] = useState([]);

  async function fetch() {
    const planetsReturn = await fetchPlanet();
    return planetsReturn;
  }

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

  function orderData(planets, column = 'name', order = 'ASC') {
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
    <PlanetsContext.Provider value={ { data, setPlanets, fetch, orderData } }>
      { prop.children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;
