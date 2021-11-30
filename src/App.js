import React from 'react';
import FilterValue from './components/FilterValue';
import Filter from './components/Filter';
import Table from './components/Table';
import FilterSort from './components/FilterSort';
import { AppContext } from './context/ProviderApp';

function App() {
  return (
    <div>
      <AppContext>
        <Filter />
        <FilterValue />
        <FilterSort />
        <Table />
      </AppContext>
    </div>
  );
}

export default App;
