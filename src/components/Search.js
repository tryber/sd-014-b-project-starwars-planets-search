import React, { useContext } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';

export default function Search() {
  const {
    inputFilter,
    setInputFilter,
  } = useContext(SWPlanetsContext);

  return (
    <input
      data-testid="name-filter"
      value={ inputFilter }
      onChange={ ({ target: { value } }) => setInputFilter(value) }
      // onChange={ handleChange }
      placeholder="Filtrar por nome"
    />
  );
}
