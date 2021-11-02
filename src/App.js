import React, { useContext } from 'react';
import './App.css';
import Loading from './components/Loading';
import PlanetsContext from './context/PlanetsContext';
import PlanetsProvider from './context/PlanetsProvider';
import Home from './pages/Home';

function App() {
  const { isLoading } = useContext(PlanetsContext);

  return (
    <main>
      <PlanetsProvider>
        { isLoading ? <Loading /> : <Home /> }
      </PlanetsProvider>
    </main>
  );
}

export default App;
