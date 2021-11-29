// Feito com ajuda do Wallacy Francis

import React from 'react';
import './App.css';
import Table from './components/PlanetTable';
import Provider from './context/PlanetFinderProvider';

function App() {
  return (
    <Provider>
      <main>
        <Table />
      </main>
    </Provider>
  );
}

export default App;
