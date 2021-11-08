import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function Filters() {
  const { filters, setFilters } = useContext(MyContext);

  const handleChange = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value.toLowerCase(),
      } });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ handleChange }
    />
  );
}
