import React from 'react';
import { FilterProvider } from './context/FilterContext';
import StarWarsPlanets from './pages/StarWarsPlanets';

function App() {
  return (
    <FilterProvider>
      <StarWarsPlanets />
    </FilterProvider>
  );
}

export default App;
