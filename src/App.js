import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <div>
        <span>Hello, App!</span>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
