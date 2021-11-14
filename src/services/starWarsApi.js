import { useState, useEffect } from 'react';

function usePlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);

  const fetchPlanets = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((dataResponse) => setData(dataResponse));
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return [data];
}

export default usePlanets;
