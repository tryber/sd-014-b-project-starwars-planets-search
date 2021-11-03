import React, { useContext, useEffect } from 'react';
import NumericFilter from '../components/NumericFilter';
import Search from '../components/Search';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Home() {
  const { data, requestPlanets } = useContext(PlanetsContext);
  const isData = Array.isArray(data) && data.length > 0;

  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h1 className="display-5 text-center">Projeto Star Wars</h1>
      <Search />
      <NumericFilter />
      { isData && <Table />}
    </section>
  );
}

export default Home;
