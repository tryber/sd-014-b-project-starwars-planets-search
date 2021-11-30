import React from 'react';
import Table from '../Components/Table';
import FilterText from '../Components/FilterText';
import FilterNumbers from '../Components/FilterNumbers';
import Ordenar from '../Components/Ordenar';

function MainPage() {
  return (
    <section>
      <FilterText />
      <FilterNumbers />
      <Ordenar />
      <Table />
    </section>
  );
}

export default MainPage;
