import React from 'react';
import InputName from './InputName';
import InputColumnFilter from './InputColumnFilter';
import InputByOrder from './InputByOrder';

function Inputs() {
  return (
    <div>
      <InputName />
      <InputByOrder />
      <InputColumnFilter />
    </div>
  );
}

export default Inputs;
