import React from 'react';
import './App.css';
import PlanetsSearchProvider from './context/MyContext';
import PlanetsSearch from './pages/Planets';

function App() {
  return (
    <div>
      <PlanetsSearchProvider>
        <PlanetsSearch />
      </PlanetsSearchProvider>
    </div>
  );
}

export default App;
