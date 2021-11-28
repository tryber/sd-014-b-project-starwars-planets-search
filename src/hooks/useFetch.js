import { useEffect, useState } from 'react';

export default function useFetch(URL) {
  const [isLoading, setIsLoading] = useState(false);
  const [listOfPlanets, setListOfPlanets] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const newResponse = await response.json();
        setListOfPlanets(newResponse.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  return [listOfPlanets, isLoading];
}
