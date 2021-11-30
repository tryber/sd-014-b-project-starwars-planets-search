import React, { useState, useContext } from 'react';
import Context from '../context/AppContext';

function FilterNumeric() {
  const initialValue = {
    column: 'population',
    comparison: 'maior que',
    value: '0',
  };
  const initialColumn = ['diameter', 'population', 'surface_water', 'orbital_period',
    'rotation_period'];

  const [columnOpt, setcolumnOpt] = useState(initialColumn);
  const [filterNumeric, setFilterNumeric] = useState(initialValue);

  const {
    changeFilterValues,
    deleteFilterNumeric,
    filterByNumericValues,
  } = useContext(Context);

  const handleChange = ({ target }) => {
    setFilterNumeric({
      ...filterNumeric,
      [target.name]: target.value,
    });
  };

  const submitFilterValues = () => {
    changeFilterValues(filterNumeric);
    const newOptions = [...columnOpt];
    newOptions.splice(columnOpt.indexOf(filterNumeric.column), 1);
    setcolumnOpt(newOptions);
  };

  // a posição de retorno da column varia
  const removeFilterNumeric = (column) => {
    const updateColumnOpt = [...columnOpt, column];
    setcolumnOpt(updateColumnOpt);
    deleteFilterNumeric(column);
  };

  return (
    <section>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {
          columnOpt.map((option, index) => (
            <option value={ option } key={ index }>{ option }</option>
          ))
        }
      </select>

      <select data-testid="comparison-filter" name="comparison" onChange={ handleChange }>
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
        type="button"
        data-testid="button-filter"
        onClick={ submitFilterValues }
      >
        Filtrar
      </button>

      <section>
        {
          filterByNumericValues.map(({ column, comparison, value }, i) => (
            <div key={ i } data-testid="filter">
              { `${column} ${comparison} ${value}` }
              <button
                type="button"
                onClick={ () => removeFilterNumeric(column) }
              >
                X
              </button>
            </div>
          ))
        }
      </section>
    </section>
  );
}

export default FilterNumeric;
