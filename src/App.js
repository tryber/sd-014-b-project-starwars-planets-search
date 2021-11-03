import React from 'react';
import './App.css';
import Table from './Components/Table';
import TextInput from './Components/TextInput';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TextInput testId="name-filter" />
      <Table />
    </Provider>
  );
}

export default App;
