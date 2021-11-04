import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputSearchText() {
  const { text, setText } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ text }
      onChange={ ({ target }) => setText(target.value) }
    />
  );
}

export default InputSearchText;
