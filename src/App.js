import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';

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
