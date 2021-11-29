import { useEffect, useState } from 'react';

// Consulta ao PR do Michael Caxias
// Hook feito com auxílio  do site: https://dev.to/keyurparalkar/creating-custom-hook-for-fetching-data-in-react-3mo3

export default function useFetch(URL) {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [thePlanets, setThePlanets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchApi = async () => {
      try {
        const response = await fetch(URL);
        const resolve = await response.jason();

        setThePlanets(resolve.results);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [URL]);

  return [thePlanets, isLoading, serverError];
}
