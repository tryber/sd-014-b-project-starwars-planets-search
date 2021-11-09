import React from 'react';
import Table from './Components/Table';
import { Provider } from './context/Provider';
import Filters from './Components/Filters';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
