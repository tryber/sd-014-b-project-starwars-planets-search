import { useState, useEffect } from 'react';

export default function APIRequest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reqAPI = async () => {
      const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const respJSON = await fetchAPI.json();
      setData(respJSON.results);
    };
    reqAPI();
  }, []);

  return [data];
}
