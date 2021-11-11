import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function SearchBar() {
  const {
    inputFilter,
    setInputFilter,
  } = useContext(Context);

  return (
    <input
      data-testid="name-filter"
      value={ inputFilter }
      onChange={ ({ target: { value } }) => setInputFilter(value) }
      placeholder="Filtrar por nome"
    />
  );
}
