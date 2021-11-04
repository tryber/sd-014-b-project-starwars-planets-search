import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Site from './pages/Site';

function App() {
  return (
    <Provider>
      <Site />
    </Provider>
  );
}

export default App;
