import React, { useContext } from 'react';
import planetContext from '../context/planetContext';

function Input() {
  const { handleFilterName } = useContext(planetContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar por Nome"
      onChange={ handleFilterName }
    />
  );
}

export default Input;
