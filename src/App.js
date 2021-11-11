import React from 'react';
import Table from './components/Table';
import Provider from './Context/Provider';
import Form from './components/Form';
import './App.css';

export default function App() {
  return (
    <Provider>
      <span>Star Wars</span>
      <Form />
      <Table />
    </Provider>
  );
}
