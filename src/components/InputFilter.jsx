import React, { useContext, useState } from 'react';
import MyContext from '../myContext/MyContext';

export default function InputFilter() {
  const { data, setData } = useContext(MyContext);
  const [optionSelect, setOptionSelect] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = ({ target }) => {
    setOptionSelect({
      ...optionSelect, // preserva no contexto o que não mudou
      [target.id]: target.value,
    });
  };

  const filterData = () => {
    if (optionSelect.comparison === 'maior que') {
      const biggerThen = data
        .filter((item) => Number(item[optionSelect.column]) > Number(optionSelect.value));
      return biggerThen;
    }
    if (optionSelect.comparison === 'menor que') {
      const lowerThen = data
        .filter((item) => Number(item[optionSelect.column]) < Number(optionSelect.value));
      return lowerThen;
    }
    const equalTo = data
      .filter((item) => Number(item[optionSelect.column]) === Number(optionSelect.value));
    return equalTo;
  };

  const handleClick = () => {
    setData(filterData);
  };

  return (
    <div>
      <select data-testid="column-filter" id="column" onChange={ handleChange }>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select data-testid="comparison-filter" id="comparison" onChange={ handleChange }>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        id="value"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}
