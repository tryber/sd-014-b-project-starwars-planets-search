import React from 'react';
import FetchProvider from '../context/fetchProvider';
import Table from '../components/Table';

function Home() {
  return (
    <div>
      <FetchProvider>
        <Table />
      </FetchProvider>
    </div>
  );
}

export default Home;
