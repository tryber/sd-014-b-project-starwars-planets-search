import React, { useContext } from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import Table from './components/Table';
import Context from './context/Context';
import Provider from './context/Provider';

function App() {
  const { isLoading } = useContext(Context);
  return (
    <Provider>
      <div>
        <h1>Projeto Star Wars Trybe</h1>
        <FilterByName />
        <FilterByNumber />
        { isLoading ? <p>Loading...</p> : <Table /> }
      </div>
    </Provider>
  );
}

export default App;
