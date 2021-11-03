import React from 'react';

import StarWarsProvider from './context/StarWarsProvider';
import InputsFilter from './components/InputsFilter';
import Table from './components/Table';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <InputsFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
