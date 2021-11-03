import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table/Table';
import Header from './components/Header/Main';

function App() {
  return (
    <Provider>
      <Header />
      <br />
      <br />
      <Table />
    </Provider>
  );
}

export default App;
