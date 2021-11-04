import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByName() {
  const { filters: { FilterByName: name }, setName } = useContext(MyContext);

  function handleChange({ target }) {
    setName(target.value);
  }

  return (
    <section>
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        placeholder="Pesquise por nome"
        value={ name }
        onChange={ handleChange }
      />
    </section>
  );
}

export default FilterByName;
