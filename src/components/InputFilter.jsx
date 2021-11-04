import React, { useContext, useState } from 'react';
import MyContext from '../myContext/MyContext';

export default function InputFilter() {
  const { data, setData } = useContext(MyContext);
  const [optionSelect, setOptionSelect] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [columnsContext, setColumnsContext] = useState(columns);

  const handleChange = ({ target }) => {
    setOptionSelect({
      ...optionSelect, // preserva no contexto o que não mudou
      [target.id]: target.value,
    });
  };

  const excludeColumns = () => {
    setColumnsContext(columns);
    const filter = columnsContext.filter((c) => c !== optionSelect.column);
    setColumnsContext(filter);
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
    excludeColumns();
  };

  return (
    <div>
      <select data-testid="column-filter" id="column" onChange={ handleChange }>
        {columnsContext.map((column) => (
          <option key={ column } value={ column }>{column}</option>
        ))}
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
