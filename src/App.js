import React from 'react';
import Provider from './context/Provider';
import Principal from './pages/Principal';

function App() {
  return (
    <Provider>
      <div>
        <Principal />
      </div>
    </Provider>
  );
}

export default App;
