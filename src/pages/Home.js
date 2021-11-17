import React from 'react';
import FetchProvider from '../context/fetchProvider';
import Table from '../components/Table';
import Inputs from '../components/Inputs';

function Home() {
  return (
    <div>
      <FetchProvider>
        <Inputs />
        <Table />
      </FetchProvider>
    </div>
  );
}

export default Home;
