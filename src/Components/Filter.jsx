import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Filters() {
  const { searchInput, updateSearchInput } = useContext(MyContext);

  function handleInputChange({ target }) {
    updateSearchInput(target.value.toLowerCase());
  }

  return (
    <div>
      <input
        type="text"
        onChange={ handleInputChange }
        value={ searchInput }
        data-testid="name-filter"
      />
    </div>
  );
}
