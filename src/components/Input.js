import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Input() {
  const { setInputSearch } = useContext(StarWarsContext);

  function handleChange({ target }) {
    const inputValue = target.value;
    setInputSearch({
      filters: {
        filterByName: {
          name: inputValue,
        },
      },
    });
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filter"
      onChange={ (event) => handleChange(event) }
      className="input"
    />
  );
}

export default Input;
