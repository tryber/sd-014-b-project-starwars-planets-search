import React, { useContext, useEffect } from 'react';
import Table from './Table';
import InputSearchText from './InputSearchText';
import PlanetsContext from '../context/PlanetsContext';
import FilterNumber from './FilterNumber';
import ButtonRemove from './ButtonRemove';

function HomePage() {
  const { requestPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <InputSearchText />
      <FilterNumber />
      <ButtonRemove />
      <Table />
    </main>
  );
}

export default HomePage;
