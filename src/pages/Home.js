import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Header from '../Components/Header';
import TablePlanets from '../Components/TablePlanets';
import FilterName from '../Components/FilterName';
import FilterNumeric from '../Components/FilterNumeric';

function Home() {
  const { loading } = useContext(MyContext);
  return (
    <div>
      <Header />
      <FilterName />
      <FilterNumeric />
      { loading ? <h2>Loading</h2> : <TablePlanets /> }
    </div>
  );
}

export default Home;
