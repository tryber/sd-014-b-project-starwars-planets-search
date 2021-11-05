import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Header from '../Components/Header';
import TablePlanets from '../Components/TablePlanets';

function Home() {
  const { isLoading } = useContext(MyContext);
  return (
    <div>
      <Header />
      { isLoading ? <h2>Loading</h2> : <TablePlanets /> }
    </div>
  );
}

export default Home;
