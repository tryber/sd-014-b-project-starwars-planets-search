import React from 'react';
import Filters from './components/Filters';
import Header from './components/Header';
import Footer from './components/Footer';
import PlanetsTable from './components/PlanetsTable';
import PlanetsProvider from './context/PlanetsProvider';

import './App.css';

function App() {
  return (
    <div className="app__body">
      <Header />
      <PlanetsProvider>
        <Filters />
        <PlanetsTable />
      </PlanetsProvider>
      <Footer />
    </div>
  );
}

export default App;
