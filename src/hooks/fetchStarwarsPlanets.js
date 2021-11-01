import { useEffect, useState } from 'react';

function useFetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState();
  const [planets, setPlanets] = useState();

  const getDataAPI = () => {
    fetch(url)
      .then((response) => response.json())
      .then((dataResponse) => {
        setData(dataResponse);
        setPlanets(dataResponse.results);
      });
  };

  const filterDataForName = (name) => {
    if (name === '') {
      setPlanets(data.results);
    } else {
      const filtered = planets.filter((item) => item.name.includes(name));
      if (filtered.length !== 0) {
        setPlanets(filtered);
      }
    }
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return [planets, filterDataForName];
}

export default useFetchPlanets;
