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

  const filterPlanetsForValues = (filtersValues) => {
    if (filtersValues.length !== 0) {
      filtersValues.forEach((filter) => {
        const filtered = planets.filter((item) => {
          const columnValue = Number(item[filter.column]);
          const filterValue = Number(filter.value);
          if (filter.comparison === 'maior que') {
            return columnValue > filterValue;
          }
          if (filter.comparison === 'menor que') {
            return columnValue < filterValue;
          }
          return columnValue === filterValue;
        });
        setPlanets(filtered);
      });
    }
  };

  const resetPlanets = () => {
    setPlanets(data.results);
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return [planets, filterDataForName, filterPlanetsForValues, resetPlanets];
}

export default useFetchPlanets;
