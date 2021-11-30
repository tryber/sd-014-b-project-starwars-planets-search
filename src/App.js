import React from 'react';
import { FilterProvider } from './context';
import StarWarsPlanets from './page';

function App() {
  return (
    <FilterProvider>
      <StarWarsPlanets />
    </FilterProvider>
  );
}

export default App;
