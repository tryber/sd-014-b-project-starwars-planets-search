import React, { useContext } from 'react';
import PlanetsProvider from '../context/PlanetsProvieder';
import PlanetsContext from '../context/PlanetsContext';

function InputSearchText() {
  const { text, setText } = useContext(PlanetsContext);
  return (
    <PlanetsProvider value={ text }>
      <input
        type="text"
        data-testid="name-filter"
        value={ text }
        onChange={ ({ target }) => setText(target.value) }
      />
    </PlanetsProvider>

  );
}

export default InputSearchText;
