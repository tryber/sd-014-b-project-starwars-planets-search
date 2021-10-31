import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Provider from './components/Provider';
import Table from './components/Table';

export default function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}
