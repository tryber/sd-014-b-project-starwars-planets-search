import React from 'react';
import MyProvider from '../context/MyProvider';
import Table from '../component/Table';
import Inputs from '../component/Inputs';
// import FetchProvider from '../context/FetchProvider';

function Home() {
  return (
    <div>
      {/* <FetchProvider> */}
      <MyProvider>
        <Inputs />
        <Table />
      </MyProvider>
      {/* </FetchProvider> */}

    </div>
  );
}

export default Home;
