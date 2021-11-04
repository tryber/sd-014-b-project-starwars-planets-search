import React from 'react';
import './App.css';
import Header from './components/Header';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
    </Provider>
  );
}

export default App;
