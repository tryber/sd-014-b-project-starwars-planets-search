import React, { useContext, useEffect } from 'react';
import Table from './Table';
import PlanetsTableContext from '../contexts';
import fetchPlanets from '../services/StarWarsAPI';

export default function Main() {
  const { data, setData, setLoading } = useContext(PlanetsTableContext);

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await fetchPlanets();

      if (planets) {
        setData({ ...data, planets });
      }

      setLoading(false);
    };

    getPlanets();
  }, []);

  return (
    <Table />
  );
}
