import { useEffect, useState } from 'react';

function useFetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((dataResponse) => {
        setData(dataResponse);
        setLoading(false);
      });
  }, []);

  return [data, loading];
}

export default useFetchPlanets;
