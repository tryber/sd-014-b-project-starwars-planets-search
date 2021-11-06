import { useEffect, useState } from 'react';

function useFetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState();

  const getDataAPI = () => {
    fetch(url)
      .then((response) => response.json())
      .then((dataResponse) => setData(dataResponse));
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return [data];
}

export default useFetchPlanets;
