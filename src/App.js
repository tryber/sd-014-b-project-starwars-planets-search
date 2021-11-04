import React from 'react';

import PlanetsProvider from './provider/PlanetsProvider';
import Filters from './components/Filters';
import Table from './components/Table';
import AppliedFilters from './components/AppliedFilters';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <AppliedFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
