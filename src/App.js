import React from 'react';
import './App.css';
import Table from './Components/Table';

import { Provider } from './Context/Provider';

function App() {
  return (
    <main>
      <Provider>
        <Table />
      </Provider>
    </main>
  );
}

export default App;
