import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <section>
        <span>Star Wars Planets</span>
        <Table />
      </section>
    </Provider>
  );
}

export default App;
