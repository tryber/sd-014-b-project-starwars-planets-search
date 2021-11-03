import React from 'react';
import InputsNumericValues from './InputsNumericValues';
import InputName from './InputName';
import InputsByOrder from './InputsByOrder';

function Inputs() {
  return (
    <div>
      <InputName />
      <InputsByOrder />
      <InputsNumericValues />
    </div>
  );
}

export default Inputs;
