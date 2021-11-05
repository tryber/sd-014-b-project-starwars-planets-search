import React from 'react';
import './App.css';
import Provider from './context/StarWarsProvider';
import TableStarWars from './TableStarWars';

function App() {
  return (
    <div>
      <Provider>
        <TableStarWars />
      </Provider>
    </div>
  );
}

export default App;
