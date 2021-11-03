import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
