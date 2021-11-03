import React, { useContext, useEffect } from 'react';
import Search from '../components/Search';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Home() {
  const { data, requestPlanets } = useContext(PlanetsContext);
  const isData = Array.isArray(data) && data.length > 0;

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <section>
      <h1>Página Home</h1>
      <Search />
      { isData && <Table />}
    </section>
  );
}

export default Home;
