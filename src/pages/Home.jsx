import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Home() {
  const { data, setData, setIsLoading } = useContext(PlanetsContext);
  const isData = Array.isArray(data) && data.length > 0;

  useEffect(() => {
    async function requestPlanets() {
      const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
      try {
        setIsLoading(true);
        const response = await fetch(URL_API);
        const { results } = await response.json();
        results.map((planet) => delete planet.residents);
        setData(results);
      } catch (error) {
        return error;
      }
    }
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1>Página Home</h1>
      { isData && <Table />}
    </section>
  );
}

export default Home;
