import React from 'react';
import './App.css';
import Table from './Components/Table';
import Header from './Components/Header';

import { Provider } from './Context/Provider';

function App() {
  return (
    <main>
      <Provider>
        <Header />
        <Table />
      </Provider>
    </main>
  );
}

export default App;
