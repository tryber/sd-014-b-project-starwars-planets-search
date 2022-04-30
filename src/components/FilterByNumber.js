import React, { useContext } from 'react';
import Context from '../context/Context';

let obj = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function FilterByNumber() {
  const {
    setAuxFilterByNumber,
    auxFilterByNumber,
    setFiltersByNumber,
    filtersToSelect,
  } = useContext(Context);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    obj = {
      ...obj,
      [name]: value,
    };
    setAuxFilterByNumber(obj);
  };

  const handleSubmit = () => {
    setFiltersByNumber(auxFilterByNumber);
  };

  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {
          filtersToSelect.map((category, index) => (
            <option key={ index }>{category}</option>
          ))
        }
      </select>
      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        name="value"
        type="number"
        min="0"
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
