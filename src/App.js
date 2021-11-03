import React, { useContext } from 'react';
import './App.css';
import Filter from './components/Filter';
import Table from './components/Table';
import Context from './context/Context';
import Provider from './context/Provider';

function App() {
  const { isLoading } = useContext(Context);
  return (
    <Provider>
      <div>
        <h1>Projeto Star Wars Trybe</h1>
        <Filter />
        { isLoading ? <p>Loading...</p> : <Table /> }
      </div>
    </Provider>
  );
}

export default App;
