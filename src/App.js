import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Main from './pages/main';

const App = () => (
  <Provider>
    <div>
      <Main />
    </div>
  </Provider>
);

export default App;
