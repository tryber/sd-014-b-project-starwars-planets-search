import { useEffect, useState } from 'react';
import mockData from '../testData';

// Hook customizado feito com ajuda site abaixo
// https://dev.to/keyurparalkar/creating-custom-hook-for-fetching-data-in-react-3mo3
export default function useFetch(URL) {
  const [isLoading, setIsLoading] = useState(false);
  const [allPlanets, setAllPlanets] = useState([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL);
        const resolve = await response.json();

        setAllPlanets(resolve.results);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setAllPlanets(mockData.results);
        setIsLoading(false);
      }
      console.log('fetch-planets');
    };
    fetchPlanets();
  }, [URL]);

  return [allPlanets, isLoading, serverError];
}
