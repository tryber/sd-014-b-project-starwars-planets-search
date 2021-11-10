import React from 'react';
import yoda from '../images/yoda.png';

function Loading() {
  return (
    <div>
      <img src={ yoda } alt="mestre-yoda" id="mestre-yoda" />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
