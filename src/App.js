import React from 'react';
import './App.css';
import Provider from './components/Provider';
import Table from './components/Table';

export default function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}
