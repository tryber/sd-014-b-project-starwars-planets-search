import { useEffect, useState } from 'react';

// Ajuda do colega Michael Caxias (Turma 14 - B) que mostrou um exemplo de hook customizado
// Referencia useFetch: https://dev.to/keyurparalkar/creating-custom-hook-for-fetching-data-in-react-3mo3

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
