import React from 'react';
import './App.css';
import Main from './pages/Main';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <span>Hello, App!</span>
      <Main />
    </Provider>
  );
}

export default App;
