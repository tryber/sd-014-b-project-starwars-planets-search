import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

function Input() {
  const { filterByName, setFilterName } = useContext(DataContext);

  function handleChange({ target }) {
    const name = target.value;
    setFilterName(name);
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterByName }
      onChange={ handleChange }
      id="filterByName"
      name="filterByName"
    />
  );
}

export default Input;
