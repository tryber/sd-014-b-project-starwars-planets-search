import React from 'react';
import './App.css';
import Table from './components/Table';
import MyComponent from './context-api/Provider';

function App() {
  return (
    <MyComponent>
      <span>Hello, App!</span>
      <Table />
    </MyComponent>
  );
}

export default App;
