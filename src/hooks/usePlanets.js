import { useEffect, useContext } from 'react';
import PlanetsContext from '../context/Planets';

function usePlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { planets, setAllPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataResponse) => setAllPlanets && setAllPlanets(dataResponse.results));
  }, [setAllPlanets]);

  return planets;
}

export default usePlanets;
