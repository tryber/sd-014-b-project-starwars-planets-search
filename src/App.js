import React from 'react';
import TablePlanets from './components/TablePlanets';
import FormFilter from './components/FormFilter';
import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <main>
        <span>Hello, App!</span>
        <FormFilter />
        <TablePlanets />
      </main>
    </MyProvider>
  );
}

export default App;
