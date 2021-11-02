import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './context/AppProvider';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
);
