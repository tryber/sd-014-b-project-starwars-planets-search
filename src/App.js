import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <span>Star Wars - Trybe</span>
    </StarWarsProvider>
  );
}

export default App;
