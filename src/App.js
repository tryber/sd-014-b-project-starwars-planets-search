import React from 'react';
import './App.css';
import DropDown from './Components/DropDown';
import Table from './Components/Table';
import TextInput from './Components/TextInput';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <TextInput />
      <DropDown />
      <Table />
    </Provider>
  );
}

export default App;
