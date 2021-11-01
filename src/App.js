import React from 'react';

import PlanetsProvider from './provider/PlanetsProvider';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
