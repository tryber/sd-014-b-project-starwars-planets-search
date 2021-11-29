import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './filter.css';

export default function Filter() {
  const { filters, setFilters } = useContext(MyContext);
  const { filterByName: { name } } = filters;

  function handleChange({ target: { id, value } }) {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: { [id]: value },
    }));
  }

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          value={ name }
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}
