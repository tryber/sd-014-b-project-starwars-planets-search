import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function InputText() {
  const [inputName, setInputName] = useState('');
  const { addNameFilter } = useContext(PlanetsContext);
  const handleChange = ({ target: { value } }) => {
    setInputName(value);
    addNameFilter(value);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filtrar por nome"
      value={ inputName }
      onChange={ handleChange }
    />
  );
}
