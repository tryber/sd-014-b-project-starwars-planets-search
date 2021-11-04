import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterByName() {
  const { filters: { FilterByName: name }, setFilters } = useContext(MyContext);

  function handleChange({ target }) {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { name: target.value.toLowerCase() },
    }));
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
