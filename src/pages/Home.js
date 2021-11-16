import React, { useContext } from 'react';
import Header from '../Components/Header';
import TablePlanets from '../Components/TablePlanets';
import FilterName from '../Components/FilterName';
import FilterNumeric from '../Components/FilterNumeric';
import SelectedFilters from '../Components/SelectedFilters';
import FilterOrder from '../Components/FilterOrder';
import MyContext from '../context/MyContext';
import Loading from '../Components/Loading';

function Home() {
  const { loading } = useContext(MyContext);
  return (
    <main>
      <Header />
      <FilterName />
      <FilterNumeric />
      <SelectedFilters />
      <FilterOrder />
      { loading ? <Loading /> : <TablePlanets />}
    </main>
  );
}

export default Home;
