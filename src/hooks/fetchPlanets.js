import { useEffect, useState } from 'react';

function useFetchPlanets() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
}

export default useFetchPlanets;
