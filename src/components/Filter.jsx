import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Filter() {
  const {
    filter,
    filter: { filterByName },
    setFilter,
  } = useContext(StarwarsContext);

  function handleChange({ target }) {
    const { value } = target;
    setFilter({
      ...filter,
      filterByName: { name: value },
    });
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ handleChange }
        type="text"
      />
    </div>
  );
}

export default Filter;
