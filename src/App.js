import React from 'react';

import PlanetsProvider from './provider/PlanetsProvider';
import Filters from './components/Filters';
import Table from './components/Table';
import AppliedFilters from './components/AppliedFilters';
import SortColumns from './components/SortColumns';

function App() {
  return (
    <PlanetsProvider>
      <Filters />
      <SortColumns />
      <AppliedFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
