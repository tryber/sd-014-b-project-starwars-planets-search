import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlanetsTableProvider from './contexts/PlanetsTableProvider';

ReactDOM.render(
  <PlanetsTableProvider>
    <App />
  </PlanetsTableProvider>,
  document.getElementById('root'),
);
