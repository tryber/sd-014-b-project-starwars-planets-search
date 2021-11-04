import React, { useContext, useState } from 'react';
import MyContext from '../MyContext';

export default function Filters() {
  const { contextValue } = useContext(MyContext);
  const { setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    data, setData } = contextValue;

  const [filterColumn, setFilterColumn] = useState([]);

  const [options, setOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);

  const handleChange = ({ target }) => {
    setFilterByNumericValues({
      ...filterByNumericValues,
      [target.name]: target.value,
    });
  };

  function filterData(comparison, column, value) {
    switch (comparison) {
    case 'maior que':
      return data.filter((planet) => planet[column] > parseInt(value, 10));
    case 'menor que':
      return data.filter((planet) => planet[column] < parseInt(value, 10));
    case 'igual a':
      return data.filter((planet) => planet[column] === value);
    default:
      return [];
    }
  }

  function handleClick() {
    const { comparison, column, value } = filterByNumericValues;
    setData(filterData(comparison, column, value));
    setFilterColumn([...filterColumn, { column, comparison, value }]);
    setOptions(options.filter((e) => e !== column));
  }

  return (
    <>
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        />
      </div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        { options.map((item, index) => <option key={ index }>{item}</option>) }
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleChange }
      />
      <button
        onClick={ handleClick }
        type="submit"
        data-testid="button-filter"
      >
        Filtrar

      </button>
    </>
  );
}
