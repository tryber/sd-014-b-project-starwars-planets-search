import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function InputText() {
  const [inputName, setInputName] = useState('');
  const { setNameFilter, data, nameFilter, setFilteredData } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setInputName(value);
    setNameFilter(value);
    const filterDataByName = data.filter(({ name }) => (
      name.toLowerCase().includes(nameFilter.toLowerCase())
    ));
    setFilteredData(filterDataByName);
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
