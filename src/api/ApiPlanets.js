import React, { useEffect, useContext } from 'react';
import myContext from '../context/MyContext';

function FetchPlanets() {
  const { setData } = useContext(myContext);
  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchApi = fetch(URL).then((response) => response.json());
    fetchApi.then((dados) => {
      setData(dados.results);
    });
  }, []);
  return (
    <div>
      {}
    </div>
  );
}

export default FetchPlanets;
