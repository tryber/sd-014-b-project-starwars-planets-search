import { useState, useEffect } from 'react';
import mockData from '../testData';

const useFetchPlanets = (URL) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL);
        const resolve = await response.json();

        setData(resolve.results);
        setLoading(false);
      } catch (error) {
        setServerError(error);
        setData(mockData.results);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, [URL]);

  return [data, loading, serverError];
};

export default useFetchPlanets;
