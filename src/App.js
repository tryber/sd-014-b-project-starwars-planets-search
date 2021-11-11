import React from 'react';
import './App.css';
import Header from './Components/Header';
import Provider from './Context/GlobalProvider';
import Home from './pages/Home';

function App() {
  return (
    <Provider>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
