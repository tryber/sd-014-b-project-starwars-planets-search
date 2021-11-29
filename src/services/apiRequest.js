import { useEffect, useState } from 'react';

export default function useHookPlanetApi({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await request.json();
      setData(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  console.log(data);
  return data;
}
