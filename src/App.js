import React from 'react';
import './App.css';
import Table from './components/Table';
import Provider from './context/MyProvider';
// import MyContext from './context/MyContext';
// import fecthPlanets from './services/services';

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
