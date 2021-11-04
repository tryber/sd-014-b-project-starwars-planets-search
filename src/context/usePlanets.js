/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const PLANETS_BASE_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function usePlanets() {
  const [planets, setPlanets] = useState([]);

  useEffect(async () => {
    const { results } = await fetch(PLANETS_BASE_URL)
      .then((response) => response.json());
    setPlanets(results);
  }, []);

  return [planets];
}

export default usePlanets;
