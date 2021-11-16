import React from 'react';
import Provider from './context/Provider';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <main>
      <Provider>
        <Home />
      </Provider>
    </main>
  );
}

export default App;
