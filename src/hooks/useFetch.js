import { useEffect, useState } from 'react';

export default function useFetch(URL) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPlanets = async () => {
      const response = await fetch(URL);
      const resolve = await response.json();

      setData(resolve.results);
      setLoading(false);
    };
    fetchPlanets();
  }, [URL]);

  return [data, loading];
}
