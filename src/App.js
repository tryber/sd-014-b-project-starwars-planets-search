import React from 'react';
import './App.css';
import Main from './pages/Main';
import Provider from './context/MyProvider';
import Header from './components/Header';

function App() {
  return (
    <Provider>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
