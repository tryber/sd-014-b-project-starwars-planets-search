import React from 'react';
import FilterValue from './components/FilterValue';
import Filter from './components/Filter';
import Table from './components/Table';
import { AppContext } from './context/ProviderApp';

function App() {
  return (
    <div>
      <AppContext>
        <Filter />
        <FilterValue />
        <Table />
      </AppContext>
    </div>
  );
}

export default App;
