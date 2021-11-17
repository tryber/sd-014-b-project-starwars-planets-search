import React from 'react';
import MyProvider from '../context/MyProvider';
import Table from '../components/Table';
import Inputs from '../components/Inputs';

function Home() {
  return (
    <div>
      <MyProvider>
        <Inputs />
        <Table />
      </MyProvider>
    </div>
  );
}

export default Home;
