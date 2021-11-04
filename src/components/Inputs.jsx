import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Inputs() {
  const { inputNameFilter, setInputNameFilter } = useContext(StarWarsContext);

  function handleInputChange({ target }) {
    setInputNameFilter(target.value);
  }
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ inputNameFilter }
      onChange={ handleInputChange }
    />
  );
}
