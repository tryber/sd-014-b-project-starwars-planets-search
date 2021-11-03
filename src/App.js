import React from 'react';
import PlanetsContextComponent from './Context/MyContext';
import Home from './Pages/Home';

function App() {
  return (
    <PlanetsContextComponent>
      <Home />
    </PlanetsContextComponent>
  );
}

export default App;
