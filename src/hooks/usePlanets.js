import { useEffect, useContext } from 'react';
import PlanetsContext from '../context/Planets';

function usePlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { planets, setPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataResponse) => setPlanets && setPlanets(dataResponse.results));
  }, [setPlanets]);

  return planets;
}

export default usePlanets;
