import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Filter from './components/Filter';
import Form from './components/Form';

function App() {
  return (
    <StarWarsProvider>
      <section>
        <Form />
      </section>
      <section>
        <Filter />
      </section>
      <main>
        <Table />
      </main>
    </StarWarsProvider>
  );
}

export default App;
