import React from 'react';
import './App.css';
import StarwarsProvider from './context/StarwarsProvider';
import Filter from './components/Filter';

function App() {
  return (
    <StarwarsProvider>
      <Filter />
    </StarwarsProvider>
  );
}

export default App;
