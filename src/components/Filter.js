import React, { useState } from 'react';

function Filter() {
  const [values, setValues] = useState('');

  function handleChange({ target }) {
    const { name, value } = target;
    setValues({ ...values, filters: { [name]: value } });
  }
  return (
    <div>
      <label htmlFor="filterName">
        <input
          data-testid="name-filter"
          id="filterName"
          name="filterByName"
          type="text"
          onChange={ handleChange }
          placeholder="Filtrar por nome"
        />
      </label>

    </div>
  );
}

export default Filter;
