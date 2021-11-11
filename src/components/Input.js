import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Input() {
  const { filterName, setFilterName } = useContext(DataContext);

  function handleChange({ target }) {
    const name = target.value;
    setFilterName(name);
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterName }
      onChange={ handleChange }
      id="filterName"
      name="filterName"
    />
  );
}

export default Input;
