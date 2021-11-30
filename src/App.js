import React from 'react';
import './App.css';
import PlanetProvider from './Context/PlanetProvider';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <PlanetProvider>
      <MainPage />
    </PlanetProvider>
  );
}

export default App;
