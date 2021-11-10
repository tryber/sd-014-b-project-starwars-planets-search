import React, { useState, useContext } from 'react';
import SWPlanetsContext from '../context/SWPlanetsContext';

export default function Search() {
  const [planet, setPlanet] = useState('');
  const {
    setFilters,
    data,
    inputFilter,
    setInputFilter,
  } = useContext(SWPlanetsContext);

  // const handleChange = ({ target: { value } }) => {
  //   setPlanet(value);
  //   filter(value);
  // };

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
