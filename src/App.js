import React from 'react';
import TablePlanets from './components/TablePlanets';

import MyProvider from './context/MyProvider';

function App() {
  return (
    <MyProvider>
      <main>
        <span>Hello, App!</span>
        <TablePlanets />
      </main>
    </MyProvider>
  );
}

export default App;
