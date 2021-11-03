import { useEffect, useState } from 'react';

const useData = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchApi = fetch(URL).then((response) => response.json());
    fetchApi.then((dados) => {
      setData(dados.results);
    });
  }, []);
  return [data];
};

export default useData;
